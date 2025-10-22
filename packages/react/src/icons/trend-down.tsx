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
          d="M.97 4.47a.75.75 0 0 1 1.06 0l7.47 7.47 2.97-2.97a.75.75 0 0 1 1.06 0l8.22 8.22V13a.75.75 0 1 1 1.5 0v6a.75.75 0 0 1-.136.428 1 1 0 0 1-.084.102.741.741 0 0 1-.244.162q-.048.02-.098.03-.02.008-.04.012l-.017.003a1 1 0 0 1-.13.013h-6a.75.75 0 0 1 0-1.5h4.188L13 10.56l-2.97 2.97a.75.75 0 0 1-.946.094l-.114-.094-8-8a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
TrendDownIcon.displayName = "TrendDownIcon";
export { TrendDownIcon };
