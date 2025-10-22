import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulersIconFilltone = memo(
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
          d="M19.75 2A2.25 2.25 0 0 1 22 4.25v3.5A2.25 2.25 0 0 1 19.75 10H10v9.75A2.25 2.25 0 0 1 7.75 22h-3.5A2.25 2.25 0 0 1 2 19.75V4.25A2.25 2.25 0 0 1 4.25 2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M10 18H7a1 1 0 1 1 0-2h3zM10 14H7a1 1 0 1 1 0-2h3z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 10H2V4a2 2 0 0 1 2-2h6zM4 8h4V4H4z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M13 6a1 1 0 0 1 1 1v3h-2V7a1 1 0 0 1 1-1M17 6a1 1 0 0 1 1 1v3h-2V7a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
RulersIconFilltone.displayName = "RulersIconFilltone";
export { RulersIconFilltone };
