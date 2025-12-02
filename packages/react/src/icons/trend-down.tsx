import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrendDownIcon = memo(
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
          d="M.97 4.47a.75.75 0 0 1 1.06 0l7.47 7.47 2.97-2.97a.75.75 0 0 1 1.06 0l8.22 8.22V13a.75.75 0 1 1 1.5 0v6a.7.7 0 0 1-.058.286.74.74 0 0 1-.264.328.8.8 0 0 1-.142.078q-.048.02-.099.03-.019.008-.039.012l-.017.003a1 1 0 0 1-.131.013h-6a.75.75 0 0 1 0-1.5h4.19L13 10.56l-2.97 2.97a.75.75 0 0 1-.946.094l-.114-.094-8-8a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
TrendDownIcon.displayName = "TrendDownIcon";
export { TrendDownIcon };
