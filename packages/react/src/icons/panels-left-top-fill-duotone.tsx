import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelsLeftTopIconFillDuotone = memo(
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
          d="M21 10v7a2 2 0 0 1-2 2H9v-9z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2V5zm4 5v9h10a2 2 0 0 0 2-2v-7zm0-2h12V7a2 2 0 0 0-2-2H9z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PanelsLeftTopIconFillDuotone.displayName = "PanelsLeftTopIconFillDuotone";
export { PanelsLeftTopIconFillDuotone };
