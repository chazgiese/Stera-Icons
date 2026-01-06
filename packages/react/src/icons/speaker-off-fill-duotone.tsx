import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffIconFillDuotone = memo(
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
          <path d="M17 18.414v.517c0 1.271-1.483 1.966-2.46 1.152l-4.833-4.027a.25.25 0 0 0-.16-.058H7.25A2.25 2.25 0 0 1 5 13.748v-3.5c0-1.04.706-1.912 1.664-2.17zM14.633 3.841C15.608 3.143 17 3.834 17 5.066v10.52L9.412 7.998h.136a.25.25 0 0 0 .159-.057l4.833-4.028z" />
        </g>
        <path
          fill="currentColor"
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
SpeakerOffIconFillDuotone.displayName = "SpeakerOffIconFillDuotone";
export { SpeakerOffIconFillDuotone };
