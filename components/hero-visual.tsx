"use client";

import { motion } from "framer-motion";
import { Mail, PhoneCall, FileText, Calendar, BarChart3, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LogoMark } from "@/components/logo";

const nodes = [
  { icon: Mail, fr: "Courriels", en: "Inbox", angle: -150 },
  { icon: PhoneCall, fr: "Appels", en: "Calls", angle: -90 },
  { icon: FileText, fr: "Documents", en: "Docs", angle: -30 },
  { icon: Calendar, fr: "Agenda", en: "Schedule", angle: 30 },
  { icon: BarChart3, fr: "Données", en: "Data", angle: 90 },
  { icon: Zap, fr: "Actions", en: "Actions", angle: 150 },
];

export function HeroVisual() {
  const { lang } = useLanguage();
  const size = 380;
  const center = size / 2;
  const radius = 150;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* glow */}
      <div className="absolute inset-8 rounded-full bg-brand-purple/10 blur-3xl" />

      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="flow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7C3AED" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        {/* orbit ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(148,163,184,0.12)"
          strokeWidth="1"
        />
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = center + radius * Math.cos(rad);
          const y = center + radius * Math.sin(rad);
          return (
            <g key={i}>
              <line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="url(#flow)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.5"
                className="animate-dash-flow"
              />
              <motion.circle
                r="3"
                fill="#38BDF8"
                initial={{ cx: center, cy: center }}
                animate={{ cx: [center, x], cy: [center, y] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* central core */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-white/15 bg-background/80 shadow-glow backdrop-blur-xl"
      >
        <LogoMark size={34} />
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
          {lang === "fr" ? "Centre IA" : "AI Core"}
        </span>
      </motion.div>

      {/* node chips */}
      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = 50 + (radius / size) * 100 * Math.cos(rad);
        const y = 50 + (radius / size) * 100 * Math.sin(rad);
        const Ico = node.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-background/80 px-2.5 py-1.5 shadow-lg backdrop-blur-md"
          >
            <Ico className="h-3.5 w-3.5 text-brand-cyan" />
            <span className="text-[11px] font-medium text-foreground">
              {lang === "fr" ? node.fr : node.en}
            </span>
          </motion.div>
        );
      })}

      {/* floating mini dashboard */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -bottom-4 -right-2 w-36 p-3 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold text-muted">KPI</span>
          <span className="text-[10px] font-semibold text-emerald-400">+24%</span>
        </div>
        <div className="mt-2 flex h-12 items-end gap-1">
          {[40, 65, 50, 80, 70, 95].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              className="flex-1 rounded-sm bg-brand-gradient"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
