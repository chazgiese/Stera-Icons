import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerMediumFilled = memo(
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
        <path
          fill="currentColor"
          d="M10.336 4c1.26-1.26 3.414-.367 3.414 1.414v13.172c0 1.782-2.154 2.674-3.414 1.414l-4-4H3.75a2 2 0 0 1-1.99-1.796L1.75 14v-4a2 2 0 0 1 2-2h2.586zM18.754 5.352a1 1 0 0 1 1.401.188 10.2 10.2 0 0 1 2.095 6.21c0 2.491-.89 4.778-2.368 6.554a1.001 1.001 0 0 1-1.538-1.28 8.22 8.22 0 0 0 1.906-5.274 8.2 8.2 0 0 0-1.686-4.997 1 1 0 0 1 .19-1.401"
        />
        <path
          fill="currentColor"
          d="M15.896 7.55a1 1 0 0 1 1.402.182A6.98 6.98 0 0 1 18.75 12a6.98 6.98 0 0 1-1.452 4.269 1 1 0 0 1-1.584-1.22A4.98 4.98 0 0 0 16.75 12a4.98 4.98 0 0 0-1.036-3.048 1 1 0 0 1 .181-1.402"
        />
      </svg>
    ))
);
SpeakerMediumFilled.displayName = "SpeakerMediumFilled";
export { SpeakerMediumFilled };
