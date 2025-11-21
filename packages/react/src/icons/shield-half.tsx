import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldHalfIcon = memo(
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
          fillRule="evenodd"
          d="M12 1.25q.06 0 .117.01.009 0 .017.002l.017.004q.018.004.036.01.038.009.077.022l8 3A.75.75 0 0 1 20.75 5v5.584a12.75 12.75 0 0 1-7.048 11.403l-1.367.684-.025.01a.8.8 0 0 1-.196.06q-.016.001-.033.004a.8.8 0 0 1-.163 0l-.032-.005a.7.7 0 0 1-.157-.043l-.04-.016-.024-.01-1.367-.684A12.75 12.75 0 0 1 3.25 10.584V5a.75.75 0 0 1 .486-.702l8-3q.038-.013.076-.022c.015-.003.03-.01.044-.012l.026-.004A1 1 0 0 1 12 1.25M4.75 5.52v5.064a11.25 11.25 0 0 0 6.219 10.061l.281.141V3.082zm8 15.266.281-.14a11.25 11.25 0 0 0 6.219-10.062V5.52l-6.5-2.438z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldHalfIcon.displayName = "ShieldHalfIcon";
export { ShieldHalfIcon };
