import { ArrowUpRight, Github, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-card overflow-hidden">
      <div className="relative flex aspect-[16/8] items-center justify-center overflow-hidden bg-gradient-to-br from-accent-blue/20 via-slate-900 to-accent-purple/20">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt ?? `${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent-cyan"
          >
            <ImageIcon size={28} strokeWidth={1.5} />
          </div>
        )}
        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          {project.status}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-3 min-h-24 text-sm leading-6 text-slate-400">
          {project.description}
        </p>
        <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-accent-cyan/15 bg-accent-cyan/5 px-3 py-1 text-xs text-cyan-100"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5">
          {project.repositoryUrl ? (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-accent-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
            >
              <Github size={16} aria-hidden="true" /> GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <Github size={16} aria-hidden="true" /> Source link unavailable
            </span>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-accent-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
            >
              Live Demo <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
