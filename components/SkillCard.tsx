import type { Skill } from "@/data/skills";

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <article className="glass-card group p-5 transition duration-300 hover:-translate-y-1 hover:border-accent-cyan/30">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-accent-cyan/15 bg-accent-cyan/5 text-accent-cyan transition group-hover:bg-accent-cyan/10">
        <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-white">{skill.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{skill.description}</p>
      <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
        {skill.category}
      </p>
    </article>
  );
}
