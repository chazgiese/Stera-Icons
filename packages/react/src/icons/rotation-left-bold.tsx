import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotationLeftIconBold = memo(
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
        <g fill="currentColor" clipPath="url(#clip0_5049_2436)">
          <path d="M5.636 5.636A1 1 0 0 1 7.05 7.05a7.002 7.002 0 0 0 4.691 11.945L12 19h.586l-1.293-1.293a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L12.586 21H12l-.333-.006A9.002 9.002 0 0 1 5.636 5.636M11.293.293a1 1 0 1 1 1.414 1.414L11.414 3H12l.333.006a9 9 0 0 1 6.031 15.358 1 1 0 0 1-1.414-1.414A7.002 7.002 0 0 0 12.26 5.005L11.999 5h-.585l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414z" />
        </g>
      </svg>
    ))
);
RotationLeftIconBold.displayName = "RotationLeftIconBold";
export { RotationLeftIconBold };
