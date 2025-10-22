import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CrosshairIconFilltone = memo(
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
        <g fill="currentColor" clipPath="url(#clip0_3425_11644)">
          <path
            fillRule="evenodd"
            d="M12 3.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17m0 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11"
            clipRule="evenodd"
            opacity={0.32}
          />
          <path d="M12 .5A1.5 1.5 0 0 1 13.5 2v8.5H22a1.5 1.5 0 0 1 0 3h-8.5V22a1.5 1.5 0 0 1-3 0v-8.5H2a1.5 1.5 0 0 1 0-3h8.5V2A1.5 1.5 0 0 1 12 .5" />
        </g>
      </svg>
    ))
);
CrosshairIconFilltone.displayName = "CrosshairIconFilltone";
export { CrosshairIconFilltone };
