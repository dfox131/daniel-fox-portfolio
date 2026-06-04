import { openSync, readSync, fstatSync, closeSync } from 'fs';
import path from 'path';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Window from '@/components/ui/Window';
import Button from '@/components/ui/Button';

function isValidPdf(filePath: string): boolean {
  try {
    const fd = openSync(filePath, 'r');
    const stat = fstatSync(fd);
    if (stat.size === 0) {
      closeSync(fd);
      return false;
    }
    const header = Buffer.alloc(5);
    readSync(fd, header, 0, 5, 0);
    closeSync(fd);
    return header.toString('ascii') === '%PDF-';
  } catch {
    return false;
  }
}

function ResumeViewer() {
  return (
    <object
      data="/resume.pdf"
      type="application/pdf"
      aria-label="Daniel Fox Resume PDF"
      className="w-full"
      style={{ height: '720px' }}
    >
      {/* Fallback for browsers that cannot render the object tag */}
      <iframe
        src="/resume.pdf"
        title="Daniel Fox Resume"
        className="w-full h-full"
        style={{ border: 'none', height: '720px' }}
      />
    </object>
  );
}

function ResumeEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
      <div className="w-12 h-12 rounded-lg border border-border bg-surface-alt flex items-center justify-center text-ink-faint">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-ink">resume.pdf not found</p>
        <p className="text-sm text-ink-muted">Add your resume to display it here.</p>
      </div>
      <code className="mt-1 px-3 py-1.5 rounded-md bg-surface-alt border border-border text-xs font-mono text-ink-muted">
        /public/resume.pdf
      </code>
    </div>
  );
}

export default function Resume() {
  const resumeExists = isValidPdf(path.join(process.cwd(), 'public', 'resume.pdf'));

  return (
    <section id="resume" className="py-24 bg-surface-alt">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-start justify-between gap-4 mb-3">
            <h2 className="text-2xl font-bold text-ink">Resume</h2>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Open in New Tab
              </Button>
              <Button href="/resume.pdf" download="daniel-fox-resume.pdf">
                ↓ Download
              </Button>
            </div>
          </div>
          <p className="text-sm text-ink-muted mb-8">
            View or download my latest resume.
          </p>
          <Window title="resume.pdf">
            {resumeExists ? <ResumeViewer /> : <ResumeEmptyState />}
          </Window>
        </AnimatedSection>
      </div>
    </section>
  );
}
