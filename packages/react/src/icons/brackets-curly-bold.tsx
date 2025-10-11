import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BracketsCurlyIconBold = memo(
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
          d="M7 2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v2.838c0 1.646-.748 3.16-1.969 4.162A5.39 5.39 0 0 1 5 16.162V19a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-2.838a3.39 3.39 0 0 0-2.316-3.214 1 1 0 0 1 0-1.897A3.39 3.39 0 0 0 3 7.838V5a3 3 0 0 1 3-3zM18 2a3 3 0 0 1 3 3v2.838c0 1.458.933 2.752 2.316 3.213a1 1 0 0 1 0 1.897A3.39 3.39 0 0 0 21 16.162V19a3 3 0 0 1-3 3h-1a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1v-2.838c0-1.646.748-3.16 1.969-4.162A5.39 5.39 0 0 1 19 7.838V5a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
BracketsCurlyIconBold.displayName = "BracketsCurlyIconBold";
export { BracketsCurlyIconBold };
