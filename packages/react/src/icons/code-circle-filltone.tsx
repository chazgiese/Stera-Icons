import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CodeCircleIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12.542 6.713a1 1 0 0 1 1.916.574l-3 10a1 1 0 0 1-1.916-.574zM7.293 8.793a1 1 0 0 1 1.414 1.414L6.914 12l1.793 1.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414zM15.293 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414L17.086 12l-1.793-1.793a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
CodeCircleIconFilltone.displayName = "CodeCircleIconFilltone";
export { CodeCircleIconFilltone };
