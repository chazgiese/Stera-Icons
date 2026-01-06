import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BracketsCurlyIconDuotone = memo(
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
          d="M7 2.25a.75.75 0 0 1 0 1.5H6c-.69 0-1.25.56-1.25 1.25v2.838c0 1.679-.817 3.214-2.128 4.162a5.14 5.14 0 0 1 2.128 4.162V19c0 .69.56 1.25 1.25 1.25h1a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 19v-2.838a3.64 3.64 0 0 0-2.487-3.45.75.75 0 0 1 0-1.424 3.64 3.64 0 0 0 2.487-3.45V5A2.75 2.75 0 0 1 6 2.25z"
        />
        <path
          fill="currentColor"
          d="M18 2.25A2.75 2.75 0 0 1 20.75 5v2.838a3.64 3.64 0 0 0 2.487 3.45.75.75 0 0 1 0 1.424 3.64 3.64 0 0 0-2.487 3.45V19A2.75 2.75 0 0 1 18 21.75h-1a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25v-2.838c0-1.679.817-3.214 2.128-4.162a5.14 5.14 0 0 1-2.128-4.162V5c0-.69-.56-1.25-1.25-1.25h-1a.75.75 0 0 1 0-1.5z"
          opacity={0.4}
        />
      </svg>
    ))
);
BracketsCurlyIconDuotone.displayName = "BracketsCurlyIconDuotone";
export { BracketsCurlyIconDuotone };
