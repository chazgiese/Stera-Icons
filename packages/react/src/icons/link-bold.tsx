import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LinkBold = memo(
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
          d="M10.439 6.854a1 1 0 1 1 .768 1.846 4.657 4.657 0 0 0-1.5 7.593l3 3a4.657 4.657 0 0 0 6.665-6.505 1 1 0 0 1 1.447-1.381 6.657 6.657 0 0 1-9.526 9.3l-3-3A6.657 6.657 0 0 1 10.44 6.854"
        />
        <path
          fill="currentColor"
          d="M3.293 3.294c2.6-2.6 6.815-2.6 9.414 0l3 3a6.657 6.657 0 0 1-2.147 10.853 1 1 0 0 1-.769-1.847 4.658 4.658 0 0 0 1.502-7.593l-3-3a4.657 4.657 0 0 0-6.662 6.509 1 1 0 0 1-1.445 1.381 6.656 6.656 0 0 1 .107-9.303"
        />
      </svg>
    ))
);
LinkBold.displayName = "LinkBold";
export { LinkBold };
