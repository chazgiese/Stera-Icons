import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelTopFloatingIconFilltone = memo(
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
          d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM6.5 13a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2h10.998a2 2 0 0 1 2 2V11a2 2 0 0 1-2 2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17.498 13a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2H6.5a2 2 0 0 0-2 2V11a2 2 0 0 0 2 2z"
        />
      </svg>
    ))
);
PanelTopFloatingIconFilltone.displayName = "PanelTopFloatingIconFilltone";
export { PanelTopFloatingIconFilltone };
