import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffFilled = memo(
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
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414M16.745 19.573c-.606 1.073-2.162 1.424-3.159.427l-4-4H7a2 2 0 0 1-2-2v-4c0-.596.262-1.13.676-1.496zM13.586 4C14.846 2.74 17 3.633 17 5.414v8.758l-6.793-6.793z"
        />
      </svg>
    ))
);
SpeakerOffFilled.displayName = "SpeakerOffFilled";
export { SpeakerOffFilled };
