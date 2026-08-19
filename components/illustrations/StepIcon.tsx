type StepKind = "focus" | "dictate" | "pick" | "insert";

function Glyph({ kind }: { kind: StepKind }) {
  const common = {
    fill: "none",
    stroke: "#4F46E5",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (kind) {
    case "focus":
      return (
        <g {...common}>
          <rect x="6" y="15" width="28" height="14" rx="4" />
          <path d="M12 22h10" />
          <path d="M22 22v0" strokeWidth="2.4" />
          <path d="M4 11h6M4 33h6M6 9v6M6 29v6" />
          <path d="M34 11h-6M34 33h-6M34 9v6M34 29v6" />
        </g>
      );
    case "dictate":
      return (
        <g {...common}>
          <rect x="16" y="6" width="8" height="16" rx="4" />
          <path d="M11 18v2a9 9 0 0 0 18 0v-2" />
          <path d="M20 29v5" />
          <path d="M14 34h12" />
          <path d="M4 20v0M36 20v0" strokeOpacity="0" />
        </g>
      );
    case "pick":
      return (
        <g {...common}>
          <rect x="8" y="20" width="20" height="12" rx="3" opacity="0.45" />
          <rect x="10" y="14" width="20" height="12" rx="3" opacity="0.7" />
          <rect x="12" y="8" width="20" height="12" rx="3" fill="#EEF0FF" />
          <path d="M27 12.5l2 2 3.5-4" stroke="#6366F1" />
        </g>
      );
    case "insert":
      return (
        <g {...common}>
          <rect x="14" y="14" width="20" height="14" rx="4" />
          <path d="M19 21h10" />
          <path d="M4 21h7" />
          <path d="M8 17l-4 4 4 4" />
        </g>
      );
  }
}

export function StepIcon({ kind }: { kind: StepKind }) {
  return (
    <div className="flex size-16 items-center justify-center rounded-2xl bg-surface">
      <svg viewBox="0 0 40 40" className="size-9" aria-hidden="true">
        <Glyph kind={kind} />
      </svg>
    </div>
  );
}
