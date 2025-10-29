import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowULeftIconFilltone = memo(
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
          d="M15.5 3a7.5 7.5 0 0 1 0 15H7v-2h8.5a5.5 5.5 0 1 0 0-11H8a1 1 0 0 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.293 12.293A1 1 0 0 1 7 13v8a1 1 0 0 1-1.707.707l-4-4-.066-.073a1 1 0 0 1 .066-1.341z"
        />
      </svg>
    ))
);
ArrowULeftIconFilltone.displayName = "ArrowULeftIconFilltone";
export { ArrowULeftIconFilltone };
