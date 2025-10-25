import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StarHalfIconFilltone = memo(
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
          d="M17.03 21.78 12 18.805V1c.584 0 1.167.315 1.44.945l2.312 5.348 5.824.538c1.364.126 1.93 1.826.889 2.736l-4.392 3.843 1.285 5.678c.306 1.35-1.154 2.386-2.328 1.692"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.97 21.78 12 18.805V1c-.584 0-1.167.315-1.44.945L8.249 7.293l-5.824.538c-1.364.126-1.93 1.826-.889 2.736l4.392 3.843-1.285 5.678c-.306 1.35 1.154 2.386 2.328 1.692"
        />
      </svg>
    ))
);
StarHalfIconFilltone.displayName = "StarHalfIconFilltone";
export { StarHalfIconFilltone };
