interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-surface-alt text-ink-muted border border-border">
      {label}
    </span>
  );
}
