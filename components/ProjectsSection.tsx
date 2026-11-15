"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

const statusFilters = ["All", ...new Set(projects.map((project) => project.status))];
const technologyFilters = [
  "All",
  ...new Set(projects.flatMap((project) => project.technologies)),
];

export function ProjectsSection() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [technologyFilter, setTechnologyFilter] = useState("All");
  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          (statusFilter === "All" || project.status === statusFilter) &&
          (technologyFilter === "All" ||
            project.technologies.includes(technologyFilter)),
      ),
    [statusFilter, technologyFilter],
  );

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Learning through building"
      description="A few projects that reflect my curiosity and the things I’m learning. I’ll add more as I build."
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <FilterGroup
          label="Status"
          values={statusFilters}
          selected={statusFilter}
          onChange={setStatusFilter}
        />
        <FilterGroup
          label="Technology"
          values={technologyFilters}
          selected={technologyFilter}
          onChange={setTechnologyFilter}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        {filteredProjects.length === 0 && (
          <p className="col-span-full rounded-2xl border border-dashed border-white/15 p-8 text-center text-sm text-slate-400">
            No projects match both filters yet.
          </p>
        )}
      </div>
    </Section>
  );
}

function FilterGroup({
  label,
  values,
  selected,
  onChange,
}: {
  label: string;
  values: string[];
  selected: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="sr-only">Filter projects by {label.toLowerCase()}</legend>
      <span aria-hidden="true" className="mr-1 text-xs text-slate-500">
        {label}:
      </span>
      {values.map((value) => (
        <button
          key={value}
          type="button"
          aria-pressed={selected === value}
          onClick={() => onChange(value)}
          className={`rounded-full border px-3 py-1.5 text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan ${
            selected === value
              ? "border-accent-cyan/40 bg-accent-cyan/10 text-cyan-100"
              : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
          }`}
        >
          {value}
        </button>
      ))}
    </fieldset>
  );
}
