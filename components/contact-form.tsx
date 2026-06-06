"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select, Label } from "@/components/ui/field";
import { useLanguage } from "@/lib/i18n";

type Variant = "contact" | "demo";

const RECIPIENT = "xxraphaelgirardxx@gmail.com";

export function ContactForm({ variant = "contact" }: { variant?: Variant }) {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const budgets =
    lang === "fr"
      ? ["Moins de 5 000 $", "5 000 $ – 15 000 $", "15 000 $ – 50 000 $", "50 000 $ +", "Pas encore défini"]
      : ["Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000 +", "Not sure yet"];

  const projectTypes =
    lang === "fr"
      ? ["Agents IA", "Automatisation des flux", "Tableaux de bord Power BI", "Logiciel sur mesure", "Autre / Pas sûr"]
      : ["AI Agents", "Workflow Automation", "Power BI Dashboards", "Custom Software", "Other / Not sure"];

  const industries =
    lang === "fr"
      ? ["Transport / Logistique", "Entreposage", "Industriel / Manufacturier", "PME", "Service client", "Autre"]
      : ["Transportation / Logistics", "Warehousing", "Industrial / Manufacturing", "Small business", "Customer service", "Other"];

  const contactMethods =
    lang === "fr" ? ["Courriel", "Téléphone", "Visioconférence"] : ["Email", "Phone", "Video call"];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const lines: string[] = [];
    data.forEach((value, key) => {
      if (value) lines.push(`${key}: ${value}`);
    });
    const subject =
      variant === "demo"
        ? "La Flèche AI — Demo request"
        : "La Flèche AI — Contact";
    const body = encodeURIComponent(lines.join("\n"));
    // Open the user's mail client pre-filled. No backend required.
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-purple/30 bg-card/50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-cyan" />
        <p className="mt-4 max-w-sm text-balance text-muted">
          {variant === "demo" ? t.demoPage.form.success : t.contactPage.form.success}
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          {lang === "fr" ? "Nouveau message" : "New message"}
        </Button>
      </div>
    );
  }

  const fc = t.contactPage.form;
  const fd = t.demoPage.form;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-white/10 bg-card/40 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">{variant === "demo" ? fd.name : fc.name}</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder={variant === "demo" ? fd.namePh : fc.namePh}
          />
        </div>
        <div>
          <Label htmlFor="email">{variant === "demo" ? fd.email : fc.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder={variant === "demo" ? fd.emailPh : fc.emailPh}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">
            {variant === "demo" ? fd.company : fc.company}
          </Label>
          <Input
            id="company"
            name="company"
            placeholder={variant === "demo" ? fd.companyPh : fc.companyPh}
          />
        </div>

        {variant === "contact" ? (
          <div>
            <Label htmlFor="projectType">{fc.projectType}</Label>
            <Select id="projectType" name="projectType" defaultValue="">
              <option value="" disabled>
                {fc.select}
              </option>
              {projectTypes.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </Select>
          </div>
        ) : (
          <div>
            <Label htmlFor="industry">{fd.industry}</Label>
            <Select id="industry" name="industry" defaultValue="">
              <option value="" disabled>
                {fd.select}
              </option>
              {industries.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </Select>
          </div>
        )}
      </div>

      {variant === "contact" ? (
        <div>
          <Label htmlFor="budget">{fc.budget}</Label>
          <Select id="budget" name="budget" defaultValue="">
            <option value="" disabled>
              {fc.select}
            </option>
            {budgets.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
        </div>
      ) : (
        <>
          <div>
            <Label htmlFor="automate">{fd.automate}</Label>
            <Input id="automate" name="automate" placeholder={fd.automatePh} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="tools">{fd.tools}</Label>
              <Input id="tools" name="tools" placeholder={fd.toolsPh} />
            </div>
            <div>
              <Label htmlFor="contactMethod">{fd.contactMethod}</Label>
              <Select id="contactMethod" name="contactMethod" defaultValue="">
                <option value="" disabled>
                  {fd.select}
                </option>
                {contactMethods.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </>
      )}

      <div>
        <Label htmlFor="message">
          {variant === "demo" ? fd.message : fc.message}
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={variant === "demo" ? fd.messagePh : fc.messagePh}
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        {variant === "demo" ? t.common.requestDemo : t.common.sendMessage}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
