import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelLeftFloatingIconFilltone = memo(
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
          d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM6.501 6.5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2H9a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 6.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6.501a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
        />
      </svg>
    ))
);
PanelLeftFloatingIconFilltone.displayName = "PanelLeftFloatingIconFilltone";
export { PanelLeftFloatingIconFilltone };
