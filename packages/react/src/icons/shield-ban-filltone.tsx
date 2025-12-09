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
          <path d="m3 5.458 15.272 13.09a13 13 0 0 1-4.458 3.663l-1.367.683a1 1 0 0 1-.894 0l-1.367-.683A13 13 0 0 1 3 10.584zM12.352 1.063l8 3A1 1 0 0 1 21 5v5.584c0 2.24-.579 4.39-1.621 6.28L4.202 3.855l7.446-2.793c.232-.073.471-.087.704 0" />
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
