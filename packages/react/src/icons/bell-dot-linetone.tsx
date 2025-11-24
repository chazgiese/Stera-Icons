import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BellDotIconLinetone = memo(
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
          d="M12 1q.481 0 .95.05a1 1 0 0 1-.21 1.99A7 7 0 0 0 5 10v2.446a3 3 0 0 1-.427 1.543l-.898 1.496A1 1 0 0 0 4.533 17h14.935a1 1 0 0 0 .858-1.515l-.898-1.496A3 3 0 0 1 19 12.446v-.258a1 1 0 1 1 2 0v.258c0 .181.05.36.143.515l.898 1.495c1.199 2-.241 4.544-2.573 4.544H16.9A5.001 5.001 0 0 1 7.1 19H4.533C2.2 19 .76 16.456 1.96 14.456l.898-1.495c.093-.155.142-.334.143-.515V10a9 9 0 0 1 9-9M9.175 19a2.998 2.998 0 0 0 5.651 0z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M18 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
      </svg>
    ))
);
BellDotIconLinetone.displayName = "BellDotIconLinetone";
export { BellDotIconLinetone };
