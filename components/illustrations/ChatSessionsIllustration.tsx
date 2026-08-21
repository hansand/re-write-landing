export function ChatSessionsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      className={className}
      role="img"
      aria-label="A saved, pinned chat thread feeding into a compose window as reusable context"
    >
      <defs>
        <filter id="csShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0B0B0F" floodOpacity="0.08" />
        </filter>
      </defs>

      <path
        d="M230 200C280 200 300 220 348 224"
        stroke="#F2A6E1"
        strokeWidth="2"
        strokeDasharray="2 8"
        strokeLinecap="round"
        fill="none"
      />

      {/* chat thread card */}
      <g filter="url(#csShadow)">
        <rect x="20" y="40" width="216" height="240" rx="18" fill="#FFFFFF" stroke="#E7E7EE" />
      </g>
      <rect x="20" y="40" width="216" height="34" rx="18" fill="#F8F8FB" />
      <circle cx="42" cy="57" r="4" fill="#E7E7EE" />
      <circle cx="56" cy="57" r="4" fill="#E7E7EE" />
      <path d="M204 50l6 7-6 7" stroke="#963681" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* messages */}
      <rect x="42" y="92" width="130" height="34" rx="14" fill="#F1F2FA" />
      <rect x="54" y="102" width="90" height="7" rx="3.5" fill="#0B0B0F" opacity="0.4" />
      <rect x="54" y="113" width="60" height="7" rx="3.5" fill="#0B0B0F" opacity="0.25" />

      <rect x="64" y="138" width="150" height="34" rx="14" fill="#EEF0FF" />
      <rect x="76" y="148" width="110" height="7" rx="3.5" fill="#792C68" opacity="0.75" />
      <rect x="76" y="159" width="80" height="7" rx="3.5" fill="#792C68" opacity="0.5" />

      <rect x="42" y="184" width="120" height="34" rx="14" fill="#F1F2FA" />
      <rect x="54" y="194" width="70" height="7" rx="3.5" fill="#0B0B0F" opacity="0.4" />
      <rect x="54" y="205" width="90" height="7" rx="3.5" fill="#0B0B0F" opacity="0.25" />

      {/* pin badge */}
      <circle cx="210" cy="230" r="18" fill="#963681" />
      <path
        d="M210 221a5 5 0 0 1 5 5c0 2.6-2.2 4.6-5 8-2.8-3.4-5-5.4-5-8a5 5 0 0 1 5-5Z"
        fill="white"
      />
      <circle cx="210" cy="226" r="2" fill="#963681" />

      {/* compose window */}
      <g filter="url(#csShadow)">
        <rect x="284" y="150" width="216" height="150" rx="18" fill="#FFFFFF" stroke="#E7E7EE" />
      </g>
      <rect x="284" y="150" width="216" height="34" rx="18" fill="#F8F8FB" />
      <circle cx="306" cy="167" r="4" fill="#E7E7EE" />
      <circle cx="320" cy="167" r="4" fill="#E7E7EE" />
      <rect x="306" y="200" width="150" height="8" rx="4" fill="#0B0B0F" opacity="0.55" />
      <rect x="306" y="216" width="170" height="8" rx="4" fill="#0B0B0F" opacity="0.4" />
      <rect x="306" y="232" width="110" height="8" rx="4" fill="#0B0B0F" opacity="0.25" />
      <rect x="306" y="260" width="90" height="24" rx="12" fill="#963681" />
      <rect x="320" y="268" width="62" height="8" rx="4" fill="white" opacity="0.9" />
    </svg>
  );
}
