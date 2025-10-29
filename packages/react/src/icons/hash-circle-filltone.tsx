import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashCircleIconFilltone = memo(
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
          <path d="M13 11v2h-2v-2z" />
          <path
            fillRule="evenodd"
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m2 5a1 1 0 0 0-1 1v2h-2V7a1 1 0 1 0-2 0v2H7a1 1 0 0 0 0 2h2v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2h2a1 1 0 1 0 0-2h-2V7a1 1 0 0 0-1-1"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14 6a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2v-2H7a1 1 0 1 1 0-2h2V7a1 1 0 0 1 2 0v2h2V7a1 1 0 0 1 1-1m-3 7h2v-2h-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HashCircleIconFilltone.displayName = "HashCircleIconFilltone";
export { HashCircleIconFilltone };
