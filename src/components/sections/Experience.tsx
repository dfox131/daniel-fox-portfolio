import AnimatedSection from '@/components/ui/AnimatedSection';
import Window from '@/components/ui/Window';
import Badge from '@/components/ui/Badge';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-ink mb-10">Experience</h2>
        <div className="flex flex-col gap-5">
          {experience.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.08}>
              <Window title={`${item.type}/${item.id}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-semibold text-ink">{item.company}</h3>
                    <p className="text-sm text-accent font-mono mt-0.5">{item.role}</p>
                  </div>
                  <span className="text-xs font-mono text-ink-faint whitespace-nowrap pt-0.5">
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {item.description.map((line, j) => (
                    <li key={j} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                      <span className="text-accent shrink-0 mt-0.5">·</span>
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <Badge key={skill} label={skill} />
                  ))}
                </div>
              </Window>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
