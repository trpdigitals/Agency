"use client";

import { motion } from "framer-motion";
import MaxWrapper from "./ui/MaxWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const serviceChips = [
  "Web & Digital",
  "UI/UX Design",
  "Mobile Apps",
  "SaaS & Custom",
  "E-Commerce",
  "AI & Automation",
];

export default function IdeaBanner() {
  return (
    <section className="py-20 bg-background relative">
      <MaxWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 sm:p-16 rounded-3xl border border-primary/30 relative overflow-hidden text-center bg-linear-to-br from-primary/8 via-background to-accent/8 shadow-[0_0_50px_rgba(239,68,68,0.1)]"
        >
          {/* Ambient Glow Pill */}
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary mb-4 inline-block px-4 py-1.5 rounded-full glass border-primary/20">
            LET&apos;S WORK TOGETHER
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
            Have a project in mind? <br />
            <span className="text-gradient">Let&apos;s build it together.</span>
          </h2>

          <p className="max-w-2xl mx-auto text-foreground/60 text-base leading-relaxed mb-10 font-normal">
            Tell us what you&apos;re looking to build. We&apos;ll help you choose the right digital solution and turn your idea into something your customers can use.
          </p>

          {/* Service Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {serviceChips.map((chip, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl border border-foreground/10 bg-foreground/5 flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/70"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{chip}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="cta-primary inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-base font-semibold transition-all hover:scale-105 shadow-[0_0_40px_rgba(239,68,68,0.3)]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </MaxWrapper>
    </section>
  );
}
