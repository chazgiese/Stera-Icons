import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleAltIconBoldDuotone = memo(
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
          <path d="M14.293 14.293a1 1 0 0 1 1.414 0L20 18.586V20h-1.414l-4.293-4.293a1 1 0 0 1 0-1.414M9.707 8.293a1 1 0 0 1-1.414 1.414L4 5.414V4h1.414z" />
        </g>
        <path
          fill="currentColor"
          d="M21 14a1 1 0 0 1 1 1v6a1 1 0 0 1-.898.995L21 22h-6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1M9 2a1 1 0 0 1 0 2H4v5a1 1 0 0 1-2 0V3a1 1 0 0 1 .897-.995L3 2z"
        />
      </svg>
    ))
);
ExpandSimpleAltIconBoldDuotone.displayName = "ExpandSimpleAltIconBoldDuotone";
export { ExpandSimpleAltIconBoldDuotone };
