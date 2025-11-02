import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffIconFilled = memo(
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
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414M16.533 19.36c-.773.99-2.34 1.245-3.374.212l-3.5-3.5a.25.25 0 0 0-.176-.074H7.25A2.25 2.25 0 0 1 5 13.748v-3.5c0-.665.29-1.26.75-1.673zM13.16 4.425C14.576 3.008 17 4.012 17 6.015v8.155l-6.793-6.793z"
        />
      </svg>
    ))
);
SpeakerOffIconFilled.displayName = "SpeakerOffIconFilled";
export { SpeakerOffIconFilled };
