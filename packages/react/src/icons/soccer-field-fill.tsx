import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerFieldIconFill = memo(
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
          d="M11 8.646a3.501 3.501 0 0 0 0 6.708V21H4a3 3 0 0 1-3-3v-2h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H1V6a3 3 0 0 1 3-3h7zM20 3a3 3 0 0 1 3 3v2h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4v2a3 3 0 0 1-3 3h-7v-5.646a3.5 3.5 0 0 0 0-6.708V3z"
        />
        <path
          fill="currentColor"
          d="M4 14H1v-4h3zM23 14h-3v-4h3zM12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
SoccerFieldIconFill.displayName = "SoccerFieldIconFill";
export { SoccerFieldIconFill };
