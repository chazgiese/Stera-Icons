import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PanelsRightBottomIconFill = memo(
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
          d="M5 21a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4zm14-2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2v14zm-4-3H3v1a2 2 0 0 0 2 2h10z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PanelsRightBottomIconFill.displayName = "PanelsRightBottomIconFill";
export { PanelsRightBottomIconFill };
