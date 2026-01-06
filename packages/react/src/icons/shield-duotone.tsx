import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldIconDuotone = memo(
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
          d="M11.736 1.298a.75.75 0 0 1 .528 0l8 3 .016.007A.747.747 0 0 0 19.25 5v.52L12 2.8 4.75 5.52V5a.75.75 0 0 0-1.014-.702z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M20 4.25a.75.75 0 0 1 .75.75v5.584a12.75 12.75 0 0 1-7.048 11.403l-1.367.684a.75.75 0 0 1-.67 0l-1.367-.684A12.75 12.75 0 0 1 3.25 10.584V5a.75.75 0 0 1 1.5 0v5.584a11.25 11.25 0 0 0 6.219 10.061l1.031.516 1.031-.516a11.25 11.25 0 0 0 6.219-10.061V5a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ShieldIconDuotone.displayName = "ShieldIconDuotone";
export { ShieldIconDuotone };
