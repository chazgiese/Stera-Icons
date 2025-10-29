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
          d="M13.16 4.426C14.575 3.01 17 4.013 17 6.017v11.965c0 2.004-2.423 3.008-3.84 1.59l-3.5-3.5A.25.25 0 0 0 9.481 16H7.25A2.25 2.25 0 0 1 5 13.75v-3.5A2.25 2.25 0 0 1 7.25 8h2.232a.25.25 0 0 0 .177-.074z"
        />
      </svg>
    ))
);
SpeakerIconFilled.displayName = "SpeakerIconFilled";
export { SpeakerIconFilled };
