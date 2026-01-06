import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EditSquareIconBoldDuotone = memo(
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
          d="M11 2a1 1 0 1 1 0 2H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a1 1 0 1 1 2 0v3a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.172 2.172a4 4 0 0 1 5.665 5.647l-8.12 8.334a1 1 0 0 1-.608.296l-5 .545a1 1 0 0 1-1.096-1.15l.757-4.789.036-.15a1 1 0 0 1 .235-.39l8.122-8.334zm4.243 1.414a2 2 0 0 0-2.829 0l-7.89 8.096-.504 3.182 3.343-.366 7.87-8.074.01-.01a2 2 0 0 0 0-2.828"
          clipRule="evenodd"
        />
      </svg>
    ))
);
EditSquareIconBoldDuotone.displayName = "EditSquareIconBoldDuotone";
export { EditSquareIconBoldDuotone };
