import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlashIconDuotone = memo(
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.375 2 5 12l5.25 1.818L7.625 22"
        />
        <path
          fill="currentColor"
          d="m17.089 2.23-2.401 7.482 4.557 1.579a.75.75 0 0 1 .25 1.272l-11.375 10q-.013.011-.027.021a.74.74 0 0 0 .246-.354l.829-2.585 8.37-7.358-4.033-1.396a.75.75 0 0 1-.469-.938l1.796-5.599 2.038-1.79a.74.74 0 0 0 .225-.36q-.003.012-.006.025"
          opacity={0.4}
        />
      </svg>
    ))
);
FlashIconDuotone.displayName = "FlashIconDuotone";
export { FlashIconDuotone };
