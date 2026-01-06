import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffIconFill = memo(
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
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414M16.82 19.649c-.423.78-1.508 1.079-2.28.436l-4.833-4.027a.25.25 0 0 0-.16-.058H7.25A2.25 2.25 0 0 1 5 13.75v-3.5c0-.665.29-1.262.748-1.674zM14.633 3.843C15.608 3.145 17 3.836 17 5.068v9.104l-6.713-6.713 4.253-3.544z"
        />
      </svg>
    ))
);
SpeakerOffIconFill.displayName = "SpeakerOffIconFill";
export { SpeakerOffIconFill };
