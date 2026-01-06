import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandLeftIconDuotone = memo(
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
          d="M3.25 14a.75.75 0 0 0 1.496.076L4.75 14a7.25 7.25 0 0 0 14.34 1.52l.061-.32a.751.751 0 0 0 1.438.397l.027-.073A8.75 8.75 0 0 1 3.25 14"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10 1.25c1.062 0 1.983.603 2.44 1.485A2.75 2.75 0 0 1 16.75 5v5.253l.253-.428a2.747 2.747 0 0 1 3.753-1 2.747 2.747 0 0 1 1.043 3.683l-1.21 3.089a.75.75 0 0 1-1.397-.548l1.222-3.116.049-.101.058-.114a1.25 1.25 0 0 0-2.223-1.136l-.004.006-1.649 2.793A.75.75 0 0 1 15.25 13V5a1.25 1.25 0 0 0-2.5 0v6a.75.75 0 0 1-1.5 0V4a1.25 1.25 0 0 0-2.5 0v7.5a.75.75 0 0 1-1.5 0V7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-1.5 0V7a2.75 2.75 0 0 1 4-2.447V4A2.75 2.75 0 0 1 10 1.25"
        />
      </svg>
    ))
);
HandLeftIconDuotone.displayName = "HandLeftIconDuotone";
export { HandLeftIconDuotone };
