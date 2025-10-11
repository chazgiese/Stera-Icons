import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerIconFilled = memo(
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
          d="M13.586 4C14.846 2.74 17 3.633 17 5.414v13.172c0 1.782-2.154 2.674-3.414 1.414l-4-4H7a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.586z"
        />
      </svg>
    ))
);
SpeakerIconFilled.displayName = "SpeakerIconFilled";
export { SpeakerIconFilled };
