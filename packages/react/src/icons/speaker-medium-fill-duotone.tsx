import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerMediumIconFillDuotone = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <g fill="currentColor" opacity={0.4}>
          <path d="M18.754 5.35a1 1 0 0 1 1.401.188 10.2 10.2 0 0 1 2.095 6.21c0 2.491-.89 4.778-2.368 6.554a1.001 1.001 0 0 1-1.538-1.28 8.2 8.2 0 0 0 1.906-5.274 8.2 8.2 0 0 0-1.686-4.997 1 1 0 0 1 .19-1.401" />
          <path d="M15.896 7.548a1 1 0 0 1 1.402.182 6.98 6.98 0 0 1 1.452 4.268 6.98 6.98 0 0 1-1.452 4.269 1 1 0 1 1-1.584-1.22 4.98 4.98 0 0 0 1.036-3.049 4.97 4.97 0 0 0-1.036-3.048 1 1 0 0 1 .182-1.402" />
        </g>
        <path
          fill="currentColor"
          d="M11.383 3.843c.975-.698 2.367-.007 2.367 1.224v13.866c0 1.271-1.483 1.966-2.46 1.152l-4.833-4.027a.25.25 0 0 0-.16-.058H4a2.25 2.25 0 0 1-2.25-2.25v-3.5A2.25 2.25 0 0 1 4 8h2.298a.25.25 0 0 0 .159-.058l4.833-4.027z"
        />
      </svg>
    ))
);
SpeakerMediumIconFillDuotone.displayName = "SpeakerMediumIconFillDuotone";
export { SpeakerMediumIconFillDuotone };
