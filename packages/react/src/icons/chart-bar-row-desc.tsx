import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarRowDescIcon = memo(
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
          d="M4 22.75a.75.75 0 0 0 .75-.75v-.25h6a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-.065-.5h2.065a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-.065-.5h2.065a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2h-14V2a.75.75 0 0 0-1.5 0v20c0 .414.336.75.75.75m.75-14.5v-4.5h14a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5zm0 1.5h10a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5h-10zm0 6h6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5h-6z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartBarRowDescIcon.displayName = "ChartBarRowDescIcon";
export { ChartBarRowDescIcon };
