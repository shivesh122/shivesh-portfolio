// Small inline SVG icon set (stroke icons, 24x24 grid). Keeps the bundle free of an icon library.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 18, props: IconProps) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const Github = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const Linkedin = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Mail = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const Phone = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const MapPin = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Download = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);

export const ArrowRight = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const ArrowUpRight = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export const ArrowUp = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
);

export const Menu = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const Close = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Sun = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const Moon = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const Send = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m22 2-7 20-4-9-9-4z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const Check = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Award = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
  </svg>
);

export const Volume = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M11 5 6 9H2v6h4l5 4z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
  </svg>
);

export const VolumeOff = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M11 5 6 9H2v6h4l5 4z" />
    <path d="m22 9-6 6M16 9l6 6" />
  </svg>
);

export const Sparkles = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
  </svg>
);

export const ShieldCheck = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Copy = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const Rocket = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
    <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
  </svg>
);

export const BarChart = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M3 3v18h18" />
    <path d="M7 16v-4M12 16V8M17 16v-7" />
  </svg>
);

export const Target = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const Briefcase = ({ size, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
