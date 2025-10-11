import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashIcon = memo(
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
          d="M15 2.25a.75.75 0 0 1 .75.75v5.25H21a.75.75 0 0 1 0 1.5h-5.25v4.5H21a.75.75 0 0 1 0 1.5h-5.25V21a.75.75 0 0 1-1.5 0v-5.25h-4.5V21a.75.75 0 0 1-1.5 0v-5.25H3a.75.75 0 0 1 0-1.5h5.25v-4.5H3a.75.75 0 0 1 0-1.5h5.25V3a.75.75 0 0 1 1.5 0v5.25h4.5V3a.75.75 0 0 1 .75-.75m-5.25 12h4.5v-4.5h-4.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HashIcon.displayName = "HashIcon";
export { HashIcon };
