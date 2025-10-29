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
        <g fill="currentColor" opacity={0.4}>
          <path d="M9.174 5a2.983 2.983 0 0 0 .456 2.834c-.813.56-1.61 1.391-2.323 2.469-.935 1.41-1.657 3.147-2.029 4.986a2.98 2.98 0 0 0-1.999-.2c.411-2.17 1.253-4.22 2.36-5.892A12 12 0 0 1 7.49 7H4.73a1.99 1.99 0 0 0 0-2zM19.27 5a1.99 1.99 0 0 0 0 2h-2.76c.686.635 1.31 1.383 1.85 2.197 1.108 1.672 1.949 3.723 2.36 5.893a2.985 2.985 0 0 0-1.999.2c-.372-1.84-1.093-3.576-2.028-4.987-.714-1.078-1.511-1.91-2.324-2.469A2.98 2.98 0 0 0 14.826 5z" />
        </g>
        <path
          fill="currentColor"
          d="M4 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6M3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    ))
);
CurveBezierIconFilltone.displayName = "CurveBezierIconFilltone";
export { CurveBezierIconFilltone };
