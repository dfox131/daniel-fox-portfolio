import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <AnimatedSection>
          <p className="font-mono text-sm text-accent mb-4 tracking-wide">hi, I&apos;m</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-ink tracking-tight mb-4 leading-tight">
            Daniel Fox
          </h1>
          <h2 className="text-xl sm:text-2xl text-ink-muted font-medium mb-6">
            Full-Stack Software Engineer
          </h2>
          <p className="max-w-lg text-ink-muted leading-relaxed mb-10 text-base">
            I build production-ready full-stack applications — from AI-powered tools to mobile apps.
            M.S. Computer Science, Pace University.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
