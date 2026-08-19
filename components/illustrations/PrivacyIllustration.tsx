export function PrivacyIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      className={className}
      role="img"
      aria-label="A locked shield over a single laptop, with no cloud connection"
    >
      {/* crossed-out cloud, far from the device */}
      <g opacity="0.7">
        <path
          d="M312 62c-14 0-25 9-28 21a19 19 0 0 0 3 38h46a17 17 0 0 0 3-33.7c-2-14-11-25.3-24-25.3Z"
          stroke="#6B6B85"
          strokeWidth="2"
          fill="none"
        />
        <path d="M292 52l52 58" stroke="#F5F5F7" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* laptop */}
      <rect x="90" y="184" width="240" height="14" rx="6" fill="#17171F" stroke="#2A2A35" />
      <path d="M104 184l10-84a8 8 0 0 1 8-7h176a8 8 0 0 1 8 7l10 84H104Z" fill="#17171F" stroke="#2A2A35" />
      <rect x="130" y="112" width="160" height="62" rx="4" fill="#0B0B0F" stroke="#2A2A35" />

      {/* shield + lock, centered on the screen */}
      <path
        d="M210 96c-15 5-27 6-27 6v26c0 21 12 34 27 40 15-6 27-19 27-40v-26s-12-1-27-6Z"
        fill="#1B1B2A"
        stroke="#6366F1"
        strokeWidth="2"
      />
      <rect x="198" y="132" width="24" height="18" rx="4" fill="#6366F1" />
      <path d="M202 132v-6a8 8 0 0 1 16 0v6" stroke="#818CF8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="210" cy="140" r="2.4" fill="#0B0B0F" />
    </svg>
  );
}
