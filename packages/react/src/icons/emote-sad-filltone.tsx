import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EmoteSadIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 13.5c1.35 0 2.599.447 3.602 1.2a1.001 1.001 0 0 1-1.202 1.6 3.98 3.98 0 0 0-2.4-.8 3.98 3.98 0 0 0-2.4.8 1 1 0 0 1-1.2-1.6 5.98 5.98 0 0 1 3.6-1.2M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"
        />
      </svg>
    ))
);
EmoteSadIconFilltone.displayName = "EmoteSadIconFilltone";
export { EmoteSadIconFilltone };
