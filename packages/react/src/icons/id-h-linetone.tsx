import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const IdHIconLinetone = memo(
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
          d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.829 8a3 3 0 0 1 3 3c0 .676-.227 1.297-.605 1.799a4 4 0 0 1 1.377 1.868 1 1 0 0 1-1.885.666 2.002 2.002 0 0 0-3.774 0 1 1 0 1 1-1.885-.666A4 4 0 0 1 6.431 12.8 3 3 0 0 1 8.828 8m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18 13a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2zM18 9a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
IdHIconLinetone.displayName = "IdHIconLinetone";
export { IdHIconLinetone };
