import Image from "next/image";

/**
 * Illustrated avatars for the team listing.
 *
 * Features are derived deterministically from the person's name, so each
 * person keeps the same face across every render and page. These are plainly
 * illustrations rather than photographs — if a real headshot exists, set
 * `photo` on the team member and it is used instead.
 */

type Feature = {
  skin: string;
  hair: string;
  hairStyle: "short" | "buzz" | "wave" | "long" | "bun" | "cover" | "bald";
  facial: "none" | "stubble" | "beard" | "moustache";
  glasses: boolean;
  shirt: string;
  cover: string;
};

export type AvatarOverrides = Partial<
  Pick<Feature, "hairStyle" | "facial" | "glasses">
>;

const SKIN = ["#f0cdae", "#e4b088", "#d2996d", "#b57c4e", "#95603a", "#70462b"];
// Kept deliberately dark so the hairline reads against every skin tone.
const HAIR = ["#1b1310", "#2d1f19", "#45291d", "#54331f", "#2b3138", "#3d2a20"];
const SHIRT = ["#0f2b48", "#17395c", "#1f4e7f", "#28608f", "#39485a"];
const COVER = ["#1f4e7f", "#2d3b4d", "#46364f", "#17423f", "#3a2f2a"];

function seedFrom(value: string) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

const pick = <T,>(list: readonly T[], seed: number, salt: number) =>
  list[(seed >> salt) % list.length];

function featuresFor(name: string, overrides?: AvatarOverrides): Feature {
  const seed = seedFrom(name);
  return {
    skin: pick(SKIN, seed, 0),
    hair: pick(HAIR, seed, 3),
    shirt: pick(SHIRT, seed, 7),
    cover: pick(COVER, seed, 11),
    hairStyle:
      overrides?.hairStyle ??
      pick(["short", "buzz", "wave", "long"] as const, seed, 5),
    facial: overrides?.facial ?? "none",
    glasses: overrides?.glasses ?? seed % 3 === 0,
  };
}

export function Avatar({
  name,
  photo,
  overrides,
  className = "",
}: {
  name: string;
  photo?: string;
  overrides?: AvatarOverrides;
  className?: string;
}) {
  if (photo) {
    return (
      <Image
        src={photo}
        alt=""
        width={160}
        height={160}
        className={`object-cover ${className}`}
      />
    );
  }

  const f = featuresFor(name, overrides);
  // Stagger blinks so a grid of faces never blinks in unison.
  const blinkDelay = `${(seedFrom(name) % 47) / 10}s`;
  const covered = f.hairStyle === "cover";

  return (
    <svg
      viewBox="0 0 120 120"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <rect width="120" height="120" fill="#0f2b48" />
      <rect width="120" height="120" fill="url(#avatar-wash)" />
      <defs>
        <linearGradient id="avatar-wash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4b7a" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0a1e34" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Shoulders and collar */}
      <path
        d="M14 120c0-23 20-35 46-35s46 12 46 35Z"
        fill={covered ? f.cover : f.shirt}
      />
      {!covered && (
        <path
          d="M49 87 60 99l11-12"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.16"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      )}

      {/* Neck */}
      <path d="M52 66h16v18c0 4-16 4-16 0Z" fill={f.skin} />
      <path d="M52 72c4 5 12 5 16 0v-6H52Z" fill="#000000" fillOpacity="0.14" />

      {/* Hair volume behind the head */}
      {(f.hairStyle === "long" ||
        f.hairStyle === "wave" ||
        f.hairStyle === "bun") && (
        <ellipse cx="60" cy="50" rx="27" ry="30" fill={f.hair} />
      )}
      {f.hairStyle === "long" && (
        <path d="M33 50h54v38c-9-11-45-11-54 0Z" fill={f.hair} />
      )}
      {f.hairStyle === "bun" && (
        <circle cx="60" cy="18" r="9.5" fill={f.hair} />
      )}

      {/* Ears */}
      <circle cx="38" cy="53" r="5" fill={f.skin} />
      <circle cx="82" cy="53" r="5" fill={f.skin} />

      {/* Face */}
      <ellipse cx="60" cy="50" rx="22" ry="26" fill={f.skin} />

      {/* Hairline, drawn over the face */}
      {f.hairStyle === "buzz" && (
        <path
          d="M38 52c0-20 9-29 22-29s22 9 22 29c-1-9-7-13-22-13s-21 4-22 13Z"
          fill={f.hair}
        />
      )}
      {f.hairStyle === "short" && (
        <path
          d="M37 54c0-22 10-32 23-32s23 10 23 32c-1-10-8-14-23-14s-22 4-23 14Z"
          fill={f.hair}
        />
      )}
      {f.hairStyle === "wave" && (
        <path
          d="M37 54c0-22 10-32 23-32s23 10 23 32c-2-12-8-8-14-14-6 6-12-6-18 0-5-4-11 2-14 14Z"
          fill={f.hair}
        />
      )}
      {(f.hairStyle === "long" || f.hairStyle === "bun") && (
        <path
          d="M36 56c0-24 11-34 24-34s24 10 24 34c-1-13-8-19-24-19s-23 6-24 19Z"
          fill={f.hair}
        />
      )}

      {/* Brows */}
      <path
        d="M49 43c2.4-1.6 5.6-1.6 8 0M63 43c2.4-1.6 5.6-1.6 8 0"
        stroke={covered ? "#2b1d16" : f.hair}
        strokeWidth="2.3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Eyes */}
      <g className="avatar-blink" style={{ animationDelay: blinkDelay }}>
        <circle cx="52" cy="51" r="2.7" fill="#1b2430" />
        <circle cx="68" cy="51" r="2.7" fill="#1b2430" />
        <circle cx="52.9" cy="50.1" r="0.85" fill="#ffffff" fillOpacity="0.8" />
        <circle cx="68.9" cy="50.1" r="0.85" fill="#ffffff" fillOpacity="0.8" />
      </g>

      {/* Nose and mouth */}
      <path
        d="M60 54v4"
        stroke="#000000"
        strokeOpacity="0.22"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M55 63c2 2.4 8 2.4 10 0"
        fill="none"
        stroke="#8a4a3c"
        strokeOpacity="0.8"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      {/* Facial hair */}
      {f.facial === "stubble" && (
        <path
          d="M40 52c1 15 9 24 20 24s19-9 20-24c1 17-7 28-20 28s-21-11-20-28Z"
          fill={f.hair}
          fillOpacity="0.3"
        />
      )}
      {f.facial === "beard" && (
        <path
          d="M42 58c2 11 8 17 18 17s16-6 18-17c1 5 1 12-1 17-3 7-9 11-17 11s-14-4-17-11c-2-5-2-12-1-17Z"
          fill={f.hair}
        />
      )}
      {(f.facial === "beard" || f.facial === "moustache") && (
        <path d="M53 60c2.5-2 11.5-2 14 0-2 2.4-12 2.4-14 0Z" fill={f.hair} />
      )}

      {/* Head covering, drawn last so the fabric frames the face */}
      {covered && (
        <path
          fillRule="evenodd"
          d="M60 15c-19 0-33 16-33 38v15c0 13 4 24 11 31l44 0c7-7 11-18 11-31V53c0-22-14-38-33-38Zm0 13c-13 0-22 10-22 25s9 27 22 27 22-12 22-27-9-25-22-25Z"
          fill={f.cover}
        />
      )}

      {/* Glasses */}
      {f.glasses && (
        <g fill="none" stroke="#141c26" strokeOpacity="0.75" strokeWidth="2">
          <rect x="43" y="45" width="17" height="13" rx="4" />
          <rect x="60" y="45" width="17" height="13" rx="4" />
          <path d="M39.5 48.5 43 47M80.5 48.5 77 47" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}
