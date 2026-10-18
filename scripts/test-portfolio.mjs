import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
assert.ok(readFileSync('app/layout.tsx', 'utf8').includes('La Flèche AI'));
const source = ts.transpileModule(readFileSync('data/projects.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const module = { exports: {} };
vm.runInNewContext(source, { module, exports: module.exports });
const { projects, supportingRepositories, matchesProject } = module.exports;
const expected = ['Python-1','my-project-webpage','Lafleche.co','mon-site-web','module-01-exercices','inskillflow-docs-systeme-d-exploitation-linux-exercices','Examen-Mi-session','inventory-management-app','Call-Bot-Assistant','terraform-localstack','BuisnessAnalyticsApp','nid-de-poule','TasK_Assigner_app','Ai-Loading-Planner','La-Fleche.ca','EDA_agents_nettoyage_de_fichier_volumineux','UE_Car_Gen','travel-qc-app','Traffic_Cam','Bodymotion_kinect','Running_Man','lstm','Genesis'];
const catalog = [...projects, ...supportingRepositories];
assert.deepEqual(Array.from(catalog.map(p => p.repository)).sort(), expected.sort(), 'Every public repository must appear exactly once');
assert.equal(new Set(projects.map(p => p.slug)).size, projects.length);
assert.equal(projects.filter(p => p.featured).length, 6);
for (const project of projects) {
  assert.equal(project.githubUrl, `https://github.com/GirardRaphael/${project.repository}`);
  assert.match(project.slug, /^[a-z0-9-]+$/);
  assert.ok(project.stack.length > 0);
  for (const lang of ['fr', 'en']) {
    for (const key of ['name','tagline','category','status','statusNote']) assert.ok(project[key][lang].trim(), `${project.slug}: ${key}.${lang}`);
    assert.ok(project.features[lang].length >= 3);
  }
}
assert.equal(projects.filter(p => matchesProject(p, 'QUEBEC'))[0].repository, 'travel-qc-app');
assert.ok(projects.filter(p => matchesProject(p, 'python fastapi')).length >= 3);
assert.equal(projects.filter(p => matchesProject(p, 'nonexistent-technology-xyz')).length, 0);
assert.equal(projects.find(p => p.repository === 'Genesis').status.en, 'Planning');
assert.equal(supportingRepositories.filter(p => p.status.en === 'Empty repository').length, 3);
if (process.env.TEST_BASE_URL) {
  const base = process.env.TEST_BASE_URL;
  for (const project of projects) {
    const response = await fetch(`${base}/projects/${project.slug}`);
    assert.equal(response.status, 200, project.slug);
    const html = await response.text();
    assert.ok(html.includes(project.githubUrl), `${project.slug}: repository link`);
    assert.ok(html.includes(`https://la-fleche.ca/projects/${project.slug}`), `${project.slug}: canonical URL`);
  }
  const missing = await fetch(`${base}/projects/does-not-exist`);
  assert.equal(missing.status, 404);
  const old = await fetch(`${base}/projects/ai-escalation-manager`, {redirect:'manual'});
  assert.equal(old.status, 308);
  assert.ok(old.headers.get('location').endsWith('/projects/interntask-ai'));
  const home = await (await fetch(base)).text();
  assert.equal((home.match(/data-project=/g) || []).length, 6);
  const gallery = await (await fetch(`${base}/projects`)).text();
  assert.ok(gallery.includes('La Flèche AI'), 'Brand accents must render correctly');
  assert.equal((gallery.match(/data-project=/g) || []).length, 15);
  assert.ok(gallery.includes('BuisnessAnalyticsApp'));
}
console.log(`Portfolio checks passed: ${projects.length} project pages, ${catalog.length} public repositories, bilingual content and accent-insensitive search${process.env.TEST_BASE_URL ? ', HTTP routes and redirects' : ''}.`);
