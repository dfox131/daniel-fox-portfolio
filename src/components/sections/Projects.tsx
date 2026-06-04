import AnimatedSection from '@/components/ui/AnimatedSection';
import Window from '@/components/ui/Window';
import Badge from '@/components/ui/Badge';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface-alt">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-ink mb-10">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.08} className="flex flex-col">
              <Window title={`${project.slug}/`} className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="font-semibold text-ink mb-2">{project.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} label={tech} />
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm font-mono">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="text-accent hover:text-accent-dark transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github →
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        className="text-accent hover:text-accent-dark transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        live →
                      </a>
                    )}
                  </div>
                </div>
              </Window>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
