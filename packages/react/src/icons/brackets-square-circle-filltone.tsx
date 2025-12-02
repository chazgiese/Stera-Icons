import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BracketsSquareCircleIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M8.41 6.5A1.91 1.91 0 0 0 6.5 8.41v7.18a1.91 1.91 0 0 0 1.91 1.91H9a1 1 0 1 0 0-2h-.5v-7H9a1 1 0 1 0 0-2zm6.59 0a1 1 0 1 0 0 2h.5v7H15a1 1 0 1 0 0 2h.59a1.91 1.91 0 0 0 1.91-1.91V8.41a1.91 1.91 0 0 0-1.91-1.91z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 6.5a1 1 0 0 1 0 2h-.5v7H9a1 1 0 1 1 0 2h-.59a1.91 1.91 0 0 1-1.91-1.91V8.41A1.91 1.91 0 0 1 8.41 6.5zM15.59 6.5a1.91 1.91 0 0 1 1.91 1.91v7.18a1.91 1.91 0 0 1-1.91 1.91H15a1 1 0 1 1 0-2h.5v-7H15a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
BracketsSquareCircleIconFilltone.displayName =
  "BracketsSquareCircleIconFilltone";
export { BracketsSquareCircleIconFilltone };
