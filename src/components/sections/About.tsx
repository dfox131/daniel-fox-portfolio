import AnimatedSection from '@/components/ui/AnimatedSection';
import Window from '@/components/ui/Window';
import Badge from '@/components/ui/Badge';

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'AWS',
  'Docker',
  'TensorFlow',
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
                  I&apos;m a full-stack software engineer with a Master&apos;s in Computer Science from Pace
                  University. I care about clean architecture, solid developer experience, and shipping
                  software that holds up in production.
                </p>
                <p>
                  My work spans web, mobile, and machine learning — from AI-powered MRI analysis systems
                  to consumer mobile apps. I&apos;m most comfortable working across the entire stack and
                  taking ownership from design to deployment.
                </p>
                <p>
                  Before grad school I completed the NYU Tandon Bridge Program to sharpen my CS
                  fundamentals. Currently building at Averent.
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
