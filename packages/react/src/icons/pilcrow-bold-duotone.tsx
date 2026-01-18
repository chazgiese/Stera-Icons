import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PilcrowIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M14 20a1 1 0 1 1-2 0V5h2zM18 20a1 1 0 1 1-2 0V5h2z" />
        </g>
        <path
          fill="currentColor"
          d="M19 3a1 1 0 1 1 0 2h-9a4 4 0 1 0 0 8h2v2h-2a6 6 0 0 1 0-12z"
        />
      </svg>
    ))
);
PilcrowIconBoldDuotone.displayName = "PilcrowIconBoldDuotone";
export { PilcrowIconBoldDuotone };
