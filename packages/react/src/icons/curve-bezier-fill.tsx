import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveBezierIconFill = memo(
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
          d="M12 3c1.306 0 2.414.835 2.826 2h4.444A1.998 1.998 0 0 1 23 6a2 2 0 0 1-3.73 1h-2.76c.686.635 1.31 1.383 1.85 2.197 1.108 1.672 1.949 3.723 2.36 5.893A2.999 2.999 0 0 1 20 21a3 3 0 0 1-1.28-5.71c-.371-1.84-1.092-3.576-2.027-4.987-.714-1.078-1.511-1.91-2.324-2.469a2.99 2.99 0 0 1-4.74 0c-.812.56-1.608 1.391-2.322 2.469-.935 1.41-1.657 3.147-2.029 4.986A2.997 2.997 0 0 1 4 21a3 3 0 0 1-.72-5.91c.41-2.17 1.252-4.22 2.36-5.893A12 12 0 0 1 7.49 7H4.73A1.998 1.998 0 0 1 1 6a2 2 0 0 1 3.73-1h4.444c.412-1.165 1.52-2 2.826-2"
        />
      </svg>
    ))
);
CurveBezierIconFill.displayName = "CurveBezierIconFill";
export { CurveBezierIconFill };
