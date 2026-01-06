import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldIconBoldDuotone = memo(
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
          d="M20 4a1 1 0 0 1 1 1v5.584a13 13 0 0 1-7.187 11.627l-1.366.684a1 1 0 0 1-.894 0l-1.367-.684A13 13 0 0 1 3 10.584V5a1 1 0 0 1 2 0v5.584a11 11 0 0 0 6.081 9.838l.919.459.919-.46A11 11 0 0 0 19 10.585V5a1 1 0 0 1 1-1"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M11.733 1.036c.203-.056.42-.047.618.028l8 3 .006.003A1 1 0 0 0 19 5v.692l-7.001-2.625L5 5.692V5a1 1 0 0 0-1.37-.93l.017-.006 8-3zM3.219 4.375" />
        </g>
      </svg>
    ))
);
ShieldIconBoldDuotone.displayName = "ShieldIconBoldDuotone";
export { ShieldIconBoldDuotone };
