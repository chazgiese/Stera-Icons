import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulersIcon = memo(
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
          fillRule="evenodd"
          d="M19.75 2.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-10v10a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2V4.25a2 2 0 0 1 2-2zm-16 17.5a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5v-2H7a.75.75 0 0 1 0-1.5h1.25v-2.5H7a.75.75 0 0 1 0-1.5h1.25v-2.5h-4.5zm.4-15.99a.5.5 0 0 0-.4.49v4h4.5v-4.5h-4a.5.5 0 0 0-.1.01m5.6 4.49h2.5V7a.75.75 0 0 1 1.5 0v1.25h2.5V7a.75.75 0 0 1 1.5 0v1.25h2a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-10z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RulersIcon.displayName = "RulersIcon";
export { RulersIcon };
