import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Checkmark = memo(
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
          d="M19.452 5.489a.75.75 0 0 1 1.096 1.023l-11.2 12a.752.752 0 0 1-1.162-.082l-4.8-6.856a.75.75 0 0 1 1.229-.86l4.268 6.098z"
        />
      </svg>
    ))
);
Checkmark.displayName = "Checkmark";
export { Checkmark };
