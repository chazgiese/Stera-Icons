import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomePlusIconFilltone = memo(
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
          d="M8.93 3.12a5 5 0 0 1 6.14 0l5 3.89A5 5 0 0 1 22 10.954V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044A5 5 0 0 1 3.93 7.01z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 9a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
HomePlusIconFilltone.displayName = "HomePlusIconFilltone";
export { HomePlusIconFilltone };
