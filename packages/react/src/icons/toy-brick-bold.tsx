import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToyBrickIconBold = memo(
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
          d="M9 3a2.25 2.25 0 0 1 2.25 2.25V7h1.5V5.25A2.25 2.25 0 0 1 15 3h2.5a2.25 2.25 0 0 1 2.25 2.25v1.848A3 3 0 0 1 22 10v8a3 3 0 0 1-3 3H5a3 3 0 0 1-2.996-2.846L2 18v-8c0-1.398.956-2.569 2.25-2.902V5.25A2.25 2.25 0 0 1 6.5 3zM5 9a1 1 0 0 0-1 1v8l.005.102A1 1 0 0 0 5 19h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm1.5-4a.25.25 0 0 0-.25.25V7h3V5.25A.25.25 0 0 0 9 5zM15 5a.25.25 0 0 0-.25.25V7h3V5.25A.25.25 0 0 0 17.5 5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToyBrickIconBold.displayName = "ToyBrickIconBold";
export { ToyBrickIconBold };
