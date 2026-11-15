"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Braces, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const phrases = [
  "Building Ideas Into Reality.",
  "Learning Today, Innovating Tomorrow.",
  "Adapting Fast. Thinking Different. Building Better.",
  "Always Ready for the Next Challenge.",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setVisibleText(phrases[0]);
      return;
    }

    const phrase = phrases[phraseIndex];
    if (!isDeleting && visibleText === phrase) {
      const timeout = window.setTimeout(() => setIsDeleting(true), 1500);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && visibleText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((index) => (index + 1) % phrases.length);
      return;
    }

    const delay = isDeleting ? 32 : 70;
    const timeout = window.setTimeout(() => {
      setVisibleText((text) =>
        isDeleting ? text.slice(0, -1) : phrase.slice(0, text.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, reduceMotion, visibleText]);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92svh] scroll-mt-20 items-center overflow-hidden pb-12 pt-28 sm:min-h-screen"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-accent-blue/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-10 h-96 w-96 rounded-full bg-accent-purple/10 blur-[120px]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-accent-cyan">
            HELLO, WORLD! I&apos;M
          </p>
          <h1
            id="hero-heading"
            className="bg-gradient-to-r from-white via-cyan-100 to-accent-purple bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
          >
            Nivashini A
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-slate-300 sm:text-xl">
            First-Year B.Tech CSE Student
            <span className="text-slate-600"> / </span>
            Aspiring Software Developer
            <span className="text-slate-600"> / </span>
            Lifelong Learner
          </p>
          <p
            className="mt-6 min-h-8 text-base text-slate-400 sm:text-lg"
            aria-live="off"
          >
            <span>{visibleText}</span>
            {!reduceMotion && (
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-5 w-px animate-pulse bg-accent-cyan align-middle"
              />
            )}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View Projects <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="button-secondary">
              Contact Me <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.12 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-cyan/15 via-transparent to-accent-purple/20 blur-2xl"
          />
          <div className="glass-panel relative overflow-hidden rounded-2xl shadow-glow">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <span className="text-xs text-slate-500">nivashini.ts</span>
              <Terminal size={16} className="text-accent-cyan" aria-hidden="true" />
            </div>
            <div className="min-h-64 p-6 font-mono text-sm leading-8 sm:p-8">
              <p className="text-slate-500">{"// a little about me"}</p>
              <p>
                <span className="text-accent-purple">const</span>{" "}
                <span className="text-cyan-100">developer</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-slate-400">{"{"}</span>
              </p>
              <p className="pl-5">
                <span className="text-slate-300">curious</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-emerald-300">true</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-5">
                <span className="text-slate-300">learning</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-amber-200">&quot;every day&quot;</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-5">
                <span className="text-slate-300">building</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-amber-200">&quot;what&apos;s next&quot;</span>
              </p>
              <p className="text-slate-400">{"};"}</p>
              <p className="mt-4 flex items-center gap-2 text-slate-500">
                <Braces size={15} aria-hidden="true" />
                <span>always growing</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
