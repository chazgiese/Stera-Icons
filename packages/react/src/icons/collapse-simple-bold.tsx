import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleIconBold = memo(
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
          d="M9 14a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-2.586l-4.293 4.293a1 1 0 0 1-1.414-1.414L6.586 16H4a1 1 0 0 1 0-2zM20.293 2.293a1 1 0 1 1 1.414 1.414L17.414 8H20a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v2.586z"
        />
      </svg>
    ))
);
CollapseSimpleIconBold.displayName = "CollapseSimpleIconBold";
export { CollapseSimpleIconBold };
