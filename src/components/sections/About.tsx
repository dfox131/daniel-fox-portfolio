import AnimatedSection from '@/components/ui/AnimatedSection';
import Window from '@/components/ui/Window';
import Badge from '@/components/ui/Badge';

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'React Native',
  'Prisma',
  'REST APIs',
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-ink mb-10">About</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Window title="about.md">
              <div className="space-y-4 text-ink-muted leading-relaxed text-sm">
                <p>
                  I&apos;m a full-stack software engineer based in the San Francisco Bay Area. I earned
                  my M.S. in Computer Science from Pace University in May 2026, and I work primarily
                  with React, TypeScript, Node.js, Express, PostgreSQL, and MongoDB.
                </p>
                <p>
                  My projects span full-stack web applications, machine learning integration, and
                  mobile development — from KneeVision, which assesses knee osteoarthritis severity
                  from X-ray images, to a React Native nutrition tracking app.
                </p>
                <p>
                  Most recently, I was a founding member and full stack developer at Averent from May
                  2025 to February 2026. I also completed the NYU Tandon Bridge Program, which built my
                  computer science foundations.
                </p>
              </div>
            </Window>
            <Window title="skills.txt">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} label={skill} />
                ))}
              </div>
            </Window>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
