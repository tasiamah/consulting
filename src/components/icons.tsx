type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ServiceIcons = {
  code: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />
    </svg>
  ),
  compass: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5.2-5.2 2 2-5.2z" />
    </svg>
  ),
  integrate: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <rect x="2.5" y="3" width="7" height="6" rx="1.2" />
      <rect x="14.5" y="15" width="7" height="6" rx="1.2" />
      <path d="M6 9v4.5a2.5 2.5 0 0 0 2.5 2.5H14" />
      <path d="M18 15v-4.5A2.5 2.5 0 0 0 15.5 8H10" />
    </svg>
  ),
  cloud: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M7 18.5h10.2a3.8 3.8 0 0 0 .3-7.6 5.6 5.6 0 0 0-10.8-1.3A4.2 4.2 0 0 0 7 18.5Z" />
      <path d="M12 12.5v4M12 12.5l-1.8 1.8M12 12.5l1.8 1.8" />
    </svg>
  ),
  shield: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M12 2.8 4.5 5.8v5.6c0 4.4 3 8.4 7.5 9.8 4.5-1.4 7.5-5.4 7.5-9.8V5.8Z" />
      <path d="m9 12 2.2 2.2L15.2 10" />
    </svg>
  ),
  support: ({ className }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13.5" width="4" height="6" rx="1.4" />
      <rect x="17.5" y="13.5" width="4" height="6" rx="1.4" />
      <path d="M20 19.5v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </svg>
  ),
};

export const ArrowRight = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5" />
  </svg>
);

export const ArrowUpRight = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </svg>
);

export const Check = ({ className }: IconProps) => (
  <svg {...base} className={className} strokeWidth={2}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const ChevronDown = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m6 9.5 6 6 6-6" />
  </svg>
);

export const Plus = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MenuIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </svg>
);

export const CloseIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="1.8" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </svg>
);

export const PinIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M19 10.3c0 5-7 11-7 11s-7-6-7-11a7 7 0 0 1 14 0Z" />
    <circle cx="12" cy="10.2" r="2.6" />
  </svg>
);

export const ClockIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.3l3.2 2" />
  </svg>
);

export const DocIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M13.5 2.8H7a2 2 0 0 0-2 2v14.4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.3Z" />
    <path d="M13.5 2.8V8.3H19M8.5 13h7M8.5 16.5h4.5" />
  </svg>
);
