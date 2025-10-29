import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SearchCircleIconFilltone = memo(
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
          <path d="M11 8a3 3 0 0 1 3 3c0 .802-.317 1.528-.83 2.066l-.054.05-.047.052A2.99 2.99 0 0 1 11 14a3 3 0 1 1 0-6" />
          <path
            fillRule="evenodd"
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-1 5a5 5 0 1 0 2.54 9.307l2.076 2.077a1.25 1.25 0 0 0 1.768-1.768l-2.077-2.077A5 5 0 0 0 11 6"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 6a5 5 0 0 1 4.307 7.54l2.077 2.076a1.25 1.25 0 0 1-1.768 1.768l-2.077-2.077A5 5 0 1 1 11 6m0 2a3 3 0 0 0 0 6c.803 0 1.53-.318 2.07-.832l.046-.052.054-.05c.513-.538.83-1.264.83-2.066a3 3 0 0 0-3-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SearchCircleIconFilltone.displayName = "SearchCircleIconFilltone";
export { SearchCircleIconFilltone };
