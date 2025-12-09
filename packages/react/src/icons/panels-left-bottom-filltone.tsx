import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelsLeftBottomIconFilltone = memo(
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
          d="M21 14V7a2 2 0 0 0-2-2H9v9z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2v14zm4-5V5h10a2 2 0 0 1 2 2v7zm0 2h12v1a2 2 0 0 1-2 2H9z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PanelsLeftBottomIconFilltone.displayName = "PanelsLeftBottomIconFilltone";
export { PanelsLeftBottomIconFilltone };
