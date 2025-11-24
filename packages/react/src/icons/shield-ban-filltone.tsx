import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldBanIconFilltone = memo(
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
          <path d="M3 5.458 18.272 18.55a13 13 0 0 1-4.458 3.662l-1.367.684a1 1 0 0 1-.894 0l-1.367-.684A13 13 0 0 1 3 10.584zM12.352 1.064l8 3A1 1 0 0 1 21 5v5.584c0 2.24-.579 4.391-1.621 6.28L4.202 3.856l7.446-2.793c.232-.074.471-.087.704 0" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.273 18.55 3 5.458V5a1 1 0 0 1 .648-.937l.554-.207 15.18 13.01a13 13 0 0 1-1.11 1.684"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldBanIconFilltone.displayName = "ShieldBanIconFilltone";
export { ShieldBanIconFilltone };
