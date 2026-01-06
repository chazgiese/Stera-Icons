import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GavelIconDuotone = memo(
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
          d="M3.884 10.955a1.75 1.75 0 0 1 2.475 0l4.243 4.243a1.75 1.75 0 0 1 0 2.474l-.707.707a1.75 1.75 0 0 1-2.476 0l-4.242-4.242a1.75 1.75 0 0 1 0-2.475zm1.414 1.06a.25.25 0 0 0-.353 0l-.707.708a.25.25 0 0 0 0 .353L8.48 17.32a.25.25 0 0 0 .353 0l.708-.707a.25.25 0 0 0 0-.354zM11.663 3.177a1.75 1.75 0 0 1 2.475 0l4.243 4.242a1.75 1.75 0 0 1 0 2.476l-.707.707a1.75 1.75 0 0 1-2.476 0l-4.242-4.243a1.75 1.75 0 0 1 0-2.475zm1.414 1.06a.25.25 0 0 0-.353 0l-.707.708a.25.25 0 0 0 0 .353l4.242 4.242a.25.25 0 0 0 .354 0l.707-.707a.25.25 0 0 0 0-.353z"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path
            fillRule="evenodd"
            d="M10.547 5.707c.084.238.219.461.41.651l.53.53-4.596 4.597 3.181 3.182 4.596-4.596.53.53c.19.19.414.325.65.41l-.827.828 5.481 5.48a2.25 2.25 0 0 1-3.182 3.182l-5.48-5.48-.83.828a1.74 1.74 0 0 0-.408-.652l-4.244-4.242a1.74 1.74 0 0 0-.65-.41zM12.9 13.96l5.48 5.48a.75.75 0 0 0 1.061-1.06l-5.48-5.48z"
            clipRule="evenodd"
          />
          <path d="m14.27 7.552-2.253-2.254-.004-.005z" />
        </g>
      </svg>
    ))
);
GavelIconDuotone.displayName = "GavelIconDuotone";
export { GavelIconDuotone };
