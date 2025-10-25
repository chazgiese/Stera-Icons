import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyCentIconFilltone = memo(
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
          d="M12 .5A1.5 1.5 0 0 1 13.5 2v20a1.5 1.5 0 0 1-3 0V2A1.5 1.5 0 0 1 12 .5"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.145 4.737a8 8 0 0 1 8.872 1.47 1.5 1.5 0 0 1-2.068 2.172 5.001 5.001 0 0 0-8.44 3.9 5 5 0 0 0 8.821 2.935 1.5 1.5 0 0 1 2.298 1.928A8 8 0 1 1 9.145 4.737"
        />
      </svg>
    ))
);
CurrencyCentIconFilltone.displayName = "CurrencyCentIconFilltone";
export { CurrencyCentIconFilltone };
