"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Search, X } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { ProjectCard } from "@/components/project-card";
import { categories, projects, supportingRepositories, matchesProject, normalizeSearch, type Category } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

type Filter = "all" | Category | "foundations";

export function ProjectsContent() {
  const { lang, pick } = useLanguage();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const fr = lang === "fr";
  const matching = projects.filter((project) => matchesProject(project, query));
  const supporting = supportingRepositories.filter((repo) => {
    const haystack = normalizeSearch([repo.name, repo.repository, repo.description.fr, repo.description.en].join(" "));
    return normalizeSearch(query).split(/\s+/).every((word) => haystack.includes(word));
  });
  const visible = matching.filter((project) => filter === "all" || project.categoryId === filter);
  const visibleSupporting = filter === "all" || filter === "foundations" ? supporting : [];
  const total = visible.length + visibleSupporting.length;
  const filters = [
    { id: "all" as const, label: fr ? "Tout explorer" : "Explore all", count: matching.length + supporting.length },
    ...Object.entries(categories).map(([id, label]) => ({ id: id as Category, label: pick(label), count: matching.filter((p) => p.categoryId === id).length })),
    { id: "foundations" as const, label: fr ? "Apprentissage et archives" : "Learning & archive", count: supporting.length },
  ];
  function reset() { setQuery(""); setFilter("all"); }

  return (
    <>
      <section className="portfolio-hero relative overflow-hidden pb-12 pt-28 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
        <div className="container-x relative">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue dark:text-brand-cyan">{fr ? "LE LABORATOIRE LA FLÈCHE AI" : "THE LA FLÈCHE AI LAB"}</p>
              <h1 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-6xl">{fr ? "Des idées au code." : "From ideas to code."}<br /><span className="gradient-text">{fr ? "Explorez mes projets." : "Explore my projects."}</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{fr ? "IA appliquée, applications web et mobiles, vision et logistique. Chaque projet présente son fonctionnement, ses technologies et son état d'avancement." : "Applied AI, web and mobile apps, computer vision and logistics. Each project explains what it does, its technology stack and its current stage."}</p>
            </div>
            <a href="https://github.com/GirardRaphael?tab=repositories" target="_blank" rel="noopener noreferrer" className="portfolio-github"><Github className="h-5 w-5" />GitHub / GirardRaphael<ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <dl className="portfolio-stats mt-10">
            <div><dt>{fr ? "Projets à explorer" : "Projects to explore"}</dt><dd>{projects.length.toString().padStart(2, "0")}</dd></div>
            <div><dt>{fr ? "Dépôts publics" : "Public repositories"}</dt><dd>{projects.length + supportingRepositories.length}</dd></div>
            <div><dt>{fr ? "Domaines techniques" : "Technical fields"}</dt><dd>{Object.keys(categories).length.toString().padStart(2, "0")}</dd></div>
          </dl>
        </div>
      </section>

      <section className="container-x py-10" aria-label={fr ? "Catalogue des projets" : "Project catalog"}>
        <div className="portfolio-controls">
          <label htmlFor="project-search" className="text-sm font-semibold">{fr ? "Trouvez un projet ou une technologie" : "Find a project or technology"}</label>
          <div className="relative mt-3 max-w-2xl">
            <Search className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-muted" />
            <input id="project-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={fr ? "Ex. Python, vision, Québec, React…" : "Try Python, vision, Québec, React…"} className="portfolio-search" autoComplete="off" aria-controls="project-results" />
          </div>
          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label={fr ? "Filtrer par domaine" : "Filter by field"}>
            {filters.map((item) => <button key={item.id} type="button" className="portfolio-filter" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}<span>{item.count}</span></button>)}
          </div>
        </div>
        <div className="mb-6 mt-8 flex min-h-9 flex-wrap items-center justify-between gap-3">
          <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-muted">{total} {fr ? "résultat(s)" : "result(s)"}{query.trim() ? ` · “${query.trim()}”` : ""}</p>
          {(query || filter !== "all") && <button type="button" onClick={reset} className="portfolio-link text-sm"><X className="h-4 w-4" />{fr ? "Réinitialiser" : "Reset filters"}</button>}
        </div>
        <div id="project-results">
          {total === 0 ? <div className="portfolio-empty"><Search className="mx-auto h-8 w-8 text-muted" /><h2 className="mt-4 text-xl font-semibold">{fr ? "Aucun projet trouvé" : "No projects found"}</h2><p className="mt-2 text-muted">{fr ? "Essayez une autre technologie ou retirez un filtre." : "Try another technology or remove a filter."}</p><button type="button" onClick={reset} className="portfolio-filter mt-6">{fr ? "Afficher tous les projets" : "Show all projects"}</button></div> : null}
          {visible.length > 0 && <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>}
          {visibleSupporting.length > 0 && <section className="mt-14" aria-labelledby="foundations-title"><h2 id="foundations-title" className="font-display text-2xl font-semibold">{fr ? "Apprentissage et premiers travaux" : "Learning & earlier work"}</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{fr ? "Exercices, premières versions et dépôts initialisés : les étapes du parcours, avec leur statut actuel." : "Exercises, earlier versions and initialized repositories: steps along the way, labeled with their current status."}</p><div className="mt-6 grid gap-3 md:grid-cols-2">{visibleSupporting.map((repo) => <a key={repo.repository} href={`https://github.com/GirardRaphael/${repo.repository}`} target="_blank" rel="noopener noreferrer" className="portfolio-archive"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold">{repo.name}</h3><span className="portfolio-status">{pick(repo.status)}</span></div><p className="mt-2 text-sm text-muted">{pick(repo.description)}</p></div><ArrowUpRight className="h-4 w-4 shrink-0 text-muted" /></a>)}</div></section>}
        </div>
      </section>
      <CTASection />
    </>
  );
}
