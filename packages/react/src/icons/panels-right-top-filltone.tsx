import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelsRightTopIconFilltone = memo(
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
          d="M3 10v7a2 2 0 0 0 2 2h10v-9z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm14 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2V5zm-4 5v9H5a2 2 0 0 1-2-2v-7zm0-2H3V7a2 2 0 0 1 2-2h10z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PanelsRightTopIconFilltone.displayName = "PanelsRightTopIconFilltone";
export { PanelsRightTopIconFilltone };
