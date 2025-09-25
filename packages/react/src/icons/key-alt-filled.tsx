import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyAltFilled = memo(
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
          d="M22.896 11.896a6 6 0 0 1-11.657 2H8.603a.5.5 0 0 0-.353.147l-.946.946a.5.5 0 0 1-.753-.054l-.809-1.078a.5.5 0 0 0-.753-.053l-.74.739a.5.5 0 0 1-.706 0L1.25 12.25a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 0 1 .353-.147h8.136a6.001 6.001 0 0 1 11.657 2m-3 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
KeyAltFilled.displayName = "KeyAltFilled";
export { KeyAltFilled };
