import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextAlignRightIconFill = memo(
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
          d="M21 16.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
TextAlignRightIconFill.displayName = "TextAlignRightIconFill";
export { TextAlignRightIconFill };
