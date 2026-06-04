import AnimatedSection from '@/components/ui/AnimatedSection';
import Window from '@/components/ui/Window';

const contactLinks = [
  {
    label: 'Email',
    value: 'dfox131@gmail.com',
    href: 'mailto:dfox131@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/danielfox',
    href: 'https://github.com/danielfox',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/danielfox',
    href: 'https://linkedin.com/in/danielfox',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-ink mb-10">Contact</h2>
          <div className="max-w-lg">
            <Window title="contact.txt">
              <p className="text-sm text-ink-muted mb-6 leading-relaxed">
                I&apos;m open to new opportunities. Feel free to reach out via any of the channels below.
              </p>
              <div className="flex flex-col gap-3">
                {contactLinks.map(({ label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-3 rounded-md border border-border hover:border-accent hover:bg-accent-subtle transition-colors group"
                  >
                    <span className="text-xs font-mono text-ink-faint w-14 shrink-0">{label}</span>
                    <span className="text-sm font-mono text-ink group-hover:text-accent transition-colors">
                      {value}
                    </span>
                  </a>
                ))}
              </div>
            </Window>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
