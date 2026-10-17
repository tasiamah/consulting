import { SectionHeading } from "./ui";
import { Reveal } from "./reveal";
import { techGroups } from "@/content/tech";

export function TechStack() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute top-1/3 -left-32 h-[26rem] w-[26rem] rounded-full bg-accent-600/12 blur-[140px]" />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            tone="light"
            title="Mainstream, well-supported, and no lock-in."
            intro="We build on technology with a large hiring pool and a long support horizon. Nothing here is exotic, because the firm that maintains your system in five years may not be us — and that should be your choice, not a technical constraint."
          />
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, i) => (
            <Reveal key={group.group} delay={i * 60}>
              <div className="h-full bg-navy-950 p-8">
                <h3 className="font-mono text-[0.6875rem] font-medium tracking-[0.16em] text-accent-200 uppercase">
                  {group.group}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-white/12 px-3 py-1.5 font-mono text-[0.75rem] text-white/65 transition-colors duration-200 hover:border-accent-400/60 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 max-w-2xl font-mono text-[0.75rem] leading-relaxed text-white/35">
            {
              "// Frameworks listed under security describe the control standards we assess and build against, not certifications held by the firm."
            }
          </p>
        </Reveal>
      </div>
    </section>
  );
}
