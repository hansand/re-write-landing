export function ContextProfilesIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      className={className}
      role="img"
      aria-label="Two saved context profiles, My bio and Product facts, toggled on and feeding into a compose window"
    >
      <defs>
        <filter id="cpShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0B0B0F" floodOpacity="0.08" />
        </filter>
      </defs>

      <path
        d="M228 78C280 78 300 130 350 140"
        stroke="#A5A9F5"
        strokeWidth="2"
        strokeDasharray="2 8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M228 158C280 158 300 170 350 180"
        stroke="#A5A9F5"
        strokeWidth="2"
        strokeDasharray="2 8"
        strokeLinecap="round"
        fill="none"
      />

      {/* profile chips */}
      <g filter="url(#cpShadow)">
        <rect x="24" y="46" width="208" height="64" rx="32" fill="#FFFFFF" stroke="#E7E7EE" />
        <rect x="24" y="126" width="208" height="64" rx="32" fill="#FFFFFF" stroke="#E7E7EE" />
        <rect x="24" y="206" width="208" height="64" rx="32" fill="#FFFFFF" stroke="#E7E7EE" />
      </g>

      <circle cx="60" cy="78" r="16" fill="#EEF0FF" />
      <path d="M60 71a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 12c5 0 9 2.5 9 6v1H51v-1c0-3.5 4-6 9-6Z" fill="#4F46E5" />
      <rect x="88" y="70" width="90" height="9" rx="4.5" fill="#0B0B0F" opacity="0.65" />
      <rect x="88" y="86" width="60" height="7" rx="3.5" fill="#0B0B0F" opacity="0.3" />
      <rect x="184" y="68" width="36" height="20" rx="10" fill="#6366F1" />
      <circle cx="210" cy="78" r="7" fill="white" />

      <circle cx="60" cy="158" r="16" fill="#EEF0FF" />
      <path d="M52 152h16v3H52v-3Zm0 6h16v3H52v-3Zm0 6h10v3H52v-3Z" fill="#4F46E5" />
      <rect x="88" y="150" width="110" height="9" rx="4.5" fill="#0B0B0F" opacity="0.65" />
      <rect x="88" y="166" width="70" height="7" rx="3.5" fill="#0B0B0F" opacity="0.3" />
      <rect x="184" y="148" width="36" height="20" rx="10" fill="#6366F1" />
      <circle cx="210" cy="158" r="7" fill="white" />

      <circle cx="60" cy="238" r="16" fill="#F1F1F6" />
      <path d="M54 232l12 12M66 232l-12 12" stroke="#9A9AA8" strokeWidth="2" strokeLinecap="round" />
      <rect x="88" y="230" width="80" height="9" rx="4.5" fill="#0B0B0F" opacity="0.4" />
      <rect x="88" y="246" width="50" height="7" rx="3.5" fill="#0B0B0F" opacity="0.22" />
      <rect x="184" y="228" width="36" height="20" rx="10" fill="#E7E7EE" />
      <circle cx="196" cy="238" r="7" fill="white" />

      {/* compose window */}
      <g filter="url(#cpShadow)">
        <rect x="272" y="118" width="224" height="150" rx="18" fill="#FFFFFF" stroke="#E7E7EE" />
      </g>
      <rect x="272" y="118" width="224" height="34" rx="18" fill="#F8F8FB" />
      <circle cx="294" cy="135" r="4" fill="#E7E7EE" />
      <circle cx="308" cy="135" r="4" fill="#E7E7EE" />
      <rect x="294" y="168" width="160" height="8" rx="4" fill="#0B0B0F" opacity="0.55" />
      <rect x="294" y="184" width="180" height="8" rx="4" fill="#0B0B0F" opacity="0.4" />
      <rect x="294" y="200" width="120" height="8" rx="4" fill="#0B0B0F" opacity="0.25" />
      <rect x="294" y="228" width="90" height="24" rx="12" fill="#6366F1" />
      <rect x="308" y="236" width="62" height="8" rx="4" fill="white" opacity="0.9" />
    </svg>
  );
}
