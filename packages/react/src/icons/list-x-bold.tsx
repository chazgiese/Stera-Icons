import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListXIconBold = memo(
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
          d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m2.404 3.096a.9.9 0 0 0-1.273 0l-1.131 1.13-1.13-1.13a.9.9 0 0 0-1.274 1.273l1.13 1.131-1.13 1.13a.9.9 0 0 0 1.273 1.274l1.131-1.13 1.13 1.13a.9.9 0 0 0 1.274-1.273l-1.13-1.131 1.13-1.13a.9.9 0 0 0 0-1.274"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M9 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM9 10a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 5a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ListXIconBold.displayName = "ListXIconBold";
export { ListXIconBold };
