import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GhostIcon = memo(
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
          d="M9 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25A8.75 8.75 0 0 1 20.75 10v11.996a.75.75 0 0 1-1.166.628l-2.544-1.696-2.071 1.658a.75.75 0 0 1-.938 0L12 20.96l-2.031 1.625a.75.75 0 0 1-.938 0L6.96 20.928l-2.543 1.696A.75.75 0 0 1 3.25 22V10A8.75 8.75 0 0 1 12 1.25m0 1.5A7.25 7.25 0 0 0 4.75 10v10.599l1.834-1.223.105-.059a.75.75 0 0 1 .78.097L9.5 21.04l2.031-1.625.108-.071a.75.75 0 0 1 .83.071L14.5 21.04l2.031-1.625.1-.067a.75.75 0 0 1 .785.029l1.834 1.223V10A7.25 7.25 0 0 0 12 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GhostIcon.displayName = "GhostIcon";
export { GhostIcon };
