import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveBezierIconFilltone = memo(
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
          d="M20 5a1 1 0 1 1 0 2h-3.49c.686.635 1.31 1.383 1.85 2.197C19.956 11.605 21 14.797 21 18a1 1 0 1 1-2 0c0-2.796-.92-5.605-2.307-7.697C15.28 8.17 13.543 7 12 7c-1.544 0-3.28 1.17-4.693 3.303C5.92 12.395 5 15.204 5 18a1 1 0 1 1-2 0c0-3.204 1.044-6.395 2.64-8.803A12 12 0 0 1 7.49 7H4a1 1 0 0 1 0-2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M4 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6M3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    ))
);
CurveBezierIconFilltone.displayName = "CurveBezierIconFilltone";
export { CurveBezierIconFilltone };
