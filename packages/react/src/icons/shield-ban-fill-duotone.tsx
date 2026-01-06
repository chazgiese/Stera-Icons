import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldBanIconFillDuotone = memo(
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
          d="M18.855 17.732 3.242 4.35a1 1 0 0 1 .406-.287l8-3 .086-.027c.203-.056.42-.047.618.027l8 3A1 1 0 0 1 21 5v5.584c0 2.591-.773 5.064-2.145 7.148"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.856 17.732a13 13 0 0 1-5.043 4.479l-1.366.684a1 1 0 0 1-.894 0l-1.367-.684A13 13 0 0 1 3 10.584V5a1 1 0 0 1 .24-.651z"
        />
      </svg>
    ))
);
ShieldBanIconFillDuotone.displayName = "ShieldBanIconFillDuotone";
export { ShieldBanIconFillDuotone };
