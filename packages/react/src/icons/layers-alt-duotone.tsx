import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersAltIconDuotone = memo(
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
          <path d="M20.665 15.83a.75.75 0 0 1 .67 1.34l-7.211 3.606a4.75 4.75 0 0 1-4.248 0l-7.21-3.605a.75.75 0 0 1 .669-1.342l7.212 3.605a3.25 3.25 0 0 0 2.906 0z" />
          <path d="M20.665 11.83a.75.75 0 0 1 .67 1.34l-7.211 3.606a4.75 4.75 0 0 1-4.248 0l-7.21-3.605a.75.75 0 0 1 .669-1.342l7.212 3.605a3.25 3.25 0 0 0 2.906 0z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.876 3.223a4.75 4.75 0 0 1 4.248 0l6.87 3.435c1.105.553 1.105 2.13 0 2.683l-6.87 3.435a4.75 4.75 0 0 1-4.248 0l-6.87-3.435c-1.105-.552-1.105-2.13 0-2.683zm3.577 1.342a3.25 3.25 0 0 0-2.906 0L3.677 8l6.87 3.434a3.25 3.25 0 0 0 2.906 0L20.323 8z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersAltIconDuotone.displayName = "LayersAltIconDuotone";
export { LayersAltIconDuotone };
