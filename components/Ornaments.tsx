export function OrnamentCorners({ className = "" }: { className?: string }) {
  return (
    <span className={`pointer-events-none absolute inset-3 ${className}`} aria-hidden="true">
      <i className="absolute top-0 left-0 h-4 w-4 border-t border-l border-gold/55" />
      <i className="absolute top-0 right-0 h-4 w-4 border-t border-r border-gold/55" />
      <i className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-gold/55" />
      <i className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-gold/55" />
    </span>
  );
}

export function DiamondRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/80" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/80" />
    </div>
  );
}
