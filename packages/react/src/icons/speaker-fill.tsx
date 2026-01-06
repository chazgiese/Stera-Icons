import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerIconFill = memo(
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
          d="M14.633 3.843C15.608 3.145 17 3.836 17 5.067v13.866c0 1.271-1.483 1.966-2.46 1.152l-4.833-4.027a.25.25 0 0 0-.16-.058H7.25A2.25 2.25 0 0 1 5 13.75v-3.5A2.25 2.25 0 0 1 7.25 8h2.298a.25.25 0 0 0 .159-.058l4.833-4.027z"
        />
      </svg>
    ))
);
SpeakerIconFill.displayName = "SpeakerIconFill";
export { SpeakerIconFill };
