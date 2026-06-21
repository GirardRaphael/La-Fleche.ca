"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select, Label } from "@/components/ui/field";
import { useLanguage } from "@/lib/i18n";

type Variant = "contact" | "demo";

export function ContactForm({ variant = "contact" }: { variant?: Variant }) {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          variant,
          language: lang,
          fields: Object.fromEntries(data.entries()),
        }),
      });

      if (!response.ok) throw new Error("Message delivery failed");

      form.reset();
      setSubmitted(true);
    } catch {
      setError(
        lang === "fr"
          ? "Le message n'a pas pu être envoyé. Veuillez réessayer ou écrire directement à xxraphaelgirardxx@gmail.com."
          : "Your message could not be sent. Please try again or email xxraphaelgirardxx@gmail.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
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

      {error && (
        <p role="alert" className="text-sm text-rose-400">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? lang === "fr"
            ? "Envoi..."
            : "Sending..."
          : variant === "demo"
            ? t.common.requestDemo
            : t.common.sendMessage}
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ArrowRight className="h-4 w-4" />
        )}
      </Button>
    </form>
  );
}
