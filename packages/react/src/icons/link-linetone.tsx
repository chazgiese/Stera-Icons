import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LinkIconLinetone = memo(
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
          d="M10.439 6.855a1 1 0 1 1 .768 1.845 4.657 4.657 0 0 0-1.5 7.593l3 3a4.657 4.657 0 0 0 6.665-6.505 1 1 0 0 1 1.447-1.38 6.657 6.657 0 0 1-9.525 9.3l-3-3a6.657 6.657 0 0 1 2.145-10.853"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M3.293 3.294c2.6-2.6 6.815-2.6 9.415 0l3 3a6.657 6.657 0 0 1-2.148 10.853 1 1 0 0 1-.769-1.847 4.658 4.658 0 0 0 1.502-7.593l-3-3a4.658 4.658 0 0 0-6.662 6.508 1 1 0 0 1-1.445 1.382 6.656 6.656 0 0 1 .107-9.303"
        />
      </svg>
    ))
);
LinkIconLinetone.displayName = "LinkIconLinetone";
export { LinkIconLinetone };
