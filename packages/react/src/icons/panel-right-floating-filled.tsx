import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelRightFloatingIconFilled = memo(
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
          d="M5 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm12.999 3.5a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H14.5A1.5 1.5 0 0 1 13 16V8a1.5 1.5 0 0 1 1.5-1.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PanelRightFloatingIconFilled.displayName = "PanelRightFloatingIconFilled";
export { PanelRightFloatingIconFilled };
