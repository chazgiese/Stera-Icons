import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleIconDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75h-1.5a9.25 9.25 0 0 0-18.5 0h-1.5C1.25 6.063 6.063 1.25 12 1.25"
        />
        <path
          fill="currentColor"
          d="M2.75 12a9.25 9.25 0 0 0 18.5 0h1.5c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12z"
          opacity={0.4}
        />
      </svg>
    ))
);
CircleIconDuotone.displayName = "CircleIconDuotone";
export { CircleIconDuotone };
