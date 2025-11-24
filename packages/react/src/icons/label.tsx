import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LabelIcon = memo(
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
          d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H8.217a4.75 4.75 0 0 1-4.027-2.232l-3.163-5.061a2.75 2.75 0 0 1 0-2.914l3.163-5.06A4.75 4.75 0 0 1 8.217 3.25zm-9.783 1.5a3.25 3.25 0 0 0-2.756 1.527L2.3 11.337a1.25 1.25 0 0 0 0 1.325l3.162 5.06a3.25 3.25 0 0 0 2.756 1.528H18A3.25 3.25 0 0 0 21.25 16V8A3.25 3.25 0 0 0 18 4.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LabelIcon.displayName = "LabelIcon";
export { LabelIcon };
