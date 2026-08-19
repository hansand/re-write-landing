export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 520"
      fill="none"
      className={className}
      role="img"
      aria-label="A browser window with a message field focused, an AI compose bubble open beside it, and a panel of three rewrite options with one selected"
    >
      <defs>
        <linearGradient id="bubbleGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#818CF8" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
        <filter id="cardShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#0B0B0F" floodOpacity="0.12" />
        </filter>
        <filter id="frameShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="24" stdDeviation="28" floodColor="#0B0B0F" floodOpacity="0.1" />
        </filter>
      </defs>

      {/* browser frame */}
      <g filter="url(#frameShadow)">
        <rect x="8" y="8" width="584" height="504" rx="22" fill="#FFFFFF" stroke="#E7E7EE" />
        <path d="M8 30a22 22 0 0 1 22-22h540a22 22 0 0 1 22 22v22H8V30Z" fill="#F8F8FB" />
        <circle cx="38" cy="41" r="5" fill="#E7E7EE" />
        <circle cx="58" cy="41" r="5" fill="#E7E7EE" />
        <circle cx="78" cy="41" r="5" fill="#E7E7EE" />
        <rect x="108" y="33" width="300" height="16" rx="8" fill="#EFEFF5" />
      </g>

      {/* background message thread, muted */}
      <g opacity="0.55">
        <circle cx="48" cy="106" r="14" fill="#EFEFF5" />
        <rect x="70" y="99" width="150" height="8" rx="4" fill="#EFEFF5" />
        <rect x="70" y="113" width="110" height="8" rx="4" fill="#EFEFF5" />

        <rect x="360" y="152" width="150" height="8" rx="4" fill="#EFEFF5" />
        <rect x="400" y="166" width="110" height="8" rx="4" fill="#EFEFF5" />
        <circle cx="536" cy="159" r="14" fill="#EFEFF5" />

        <circle cx="48" cy="206" r="14" fill="#EFEFF5" />
        <rect x="70" y="199" width="190" height="8" rx="4" fill="#EFEFF5" />
        <rect x="70" y="213" width="90" height="8" rx="4" fill="#EFEFF5" />
      </g>

      {/* rewrite panel */}
      <g filter="url(#cardShadow)">
        <rect x="300" y="146" width="264" height="196" rx="18" fill="#FFFFFF" stroke="#E7E7EE" />
        <rect x="324" y="172" width="72" height="10" rx="5" fill="#9A9AA8" />

        <rect x="316" y="196" width="232" height="40" rx="12" fill="#EEF0FF" stroke="#6366F1" strokeWidth="1.5" />
        <rect x="332" y="208" width="140" height="7" rx="3.5" fill="#4F46E5" opacity="0.7" />
        <rect x="332" y="220" width="96" height="7" rx="3.5" fill="#4F46E5" opacity="0.45" />
        <circle cx="524" cy="216" r="10" fill="#6366F1" />
        <path d="M519.5 216l3 3 6-6.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="316" y="244" width="232" height="40" rx="12" fill="#F8F8FB" stroke="#E7E7EE" />
        <rect x="332" y="256" width="120" height="7" rx="3.5" fill="#0B0B0F" opacity="0.35" />
        <rect x="332" y="268" width="150" height="7" rx="3.5" fill="#0B0B0F" opacity="0.2" />

        <rect x="316" y="292" width="232" height="40" rx="12" fill="#F8F8FB" stroke="#E7E7EE" />
        <rect x="332" y="304" width="104" height="7" rx="3.5" fill="#0B0B0F" opacity="0.35" />
        <rect x="332" y="316" width="164" height="7" rx="3.5" fill="#0B0B0F" opacity="0.2" />
      </g>

      {/* focused compose field */}
      <g filter="url(#cardShadow)">
        <rect x="40" y="374" width="380" height="98" rx="18" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2" />
      </g>
      <rect x="64" y="404" width="230" height="9" rx="4.5" fill="#0B0B0F" opacity="0.55" />
      <rect x="64" y="422" width="160" height="9" rx="4.5" fill="#0B0B0F" opacity="0.3" />
      <rect x="228" y="422" width="2" height="12" fill="#6366F1" />

      {/* compose bubble */}
      <circle cx="424" cy="378" r="36" fill="#6366F1" opacity="0.12" />
      <circle cx="424" cy="378" r="28" fill="url(#bubbleGrad)" />
      <path
        d="M424.6 366.4a.65.65 0 0 1 1.24 0l1.1 3.3a3.6 3.6 0 0 0 2.28 2.28l3.3 1.1a.65.65 0 0 1 0 1.24l-3.3 1.1a3.6 3.6 0 0 0-2.28 2.28l-1.1 3.3a.65.65 0 0 1-1.24 0l-1.1-3.3a3.6 3.6 0 0 0-2.28-2.28l-3.3-1.1a.65.65 0 0 1 0-1.24l3.3-1.1a3.6 3.6 0 0 0 2.28-2.28l1.1-3.3Z"
        fill="white"
      />
    </svg>
  );
}
