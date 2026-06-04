import type { ReactNode } from 'react';

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Window({ title, children, className = '' }: WindowProps) {
  return (
    <div className={`rounded-lg border border-border bg-surface shadow-sm overflow-hidden flex flex-col ${className}`}>
      <div className="flex items-center gap-3 px-4 py-2.5 bg-window-bar border-b border-border shrink-0">
        <div className="flex gap-1.5">
          <span className="block w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs font-mono text-ink-faint truncate">{title}</span>
      </div>
      <div className="p-6 flex-1">{children}</div>
    </div>
  );
}
