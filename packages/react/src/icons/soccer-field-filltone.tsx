import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerFieldIconFilltone = memo(
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
          d="M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13 8.646a3.501 3.501 0 0 1 0 6.708V21h-2v-5.646a3.5 3.5 0 0 1 0-6.708V3h2zM12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M5 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1v-2h3v-4H1V8zM23 10h-3v4h3v2h-4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4z"
        />
      </svg>
    ))
);
SoccerFieldIconFilltone.displayName = "SoccerFieldIconFilltone";
export { SoccerFieldIconFilltone };
