import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldCheckIcon = memo(
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
          d="M15.345 8.97a.75.75 0 0 1 1.06 1.06l-4.847 4.848c-.103.103-.214.215-.317.3-.108.092-.264.206-.476.265a1.25 1.25 0 0 1-.838-.06 1.3 1.3 0 0 1-.435-.328c-.089-.1-.183-.226-.27-.343L7.525 12.45a.75.75 0 0 1 1.2-.9l1.697 2.263.034.045.041-.04z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.736 1.298a.75.75 0 0 1 .528 0l8 3A.75.75 0 0 1 20.75 5v5.584a12.75 12.75 0 0 1-7.048 11.403l-1.367.684a.75.75 0 0 1-.67 0l-1.367-.684A12.75 12.75 0 0 1 3.25 10.584V5a.75.75 0 0 1 .486-.702zM4.75 5.52v5.064a11.25 11.25 0 0 0 6.219 10.062L12 21.16l1.031-.515a11.25 11.25 0 0 0 6.219-10.062V5.52L12 2.8z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldCheckIcon.displayName = "ShieldCheckIcon";
export { ShieldCheckIcon };
