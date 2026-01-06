import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BirdhouseIconDuotone = memo(
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
          <path d="m6.094 19.25-1.63-8.55 1.307-1.16 1.85 9.71zM18.229 9.54l1.305 1.16-1.628 8.55H16.38z" />
        </g>
        <path
          fill="currentColor"
          d="M19 19.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 9.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M10.506 3.325a2.25 2.25 0 0 1 2.99 0l8.002 7.115a.75.75 0 0 1-.996 1.12L12.5 4.447a.75.75 0 0 0-.996 0l-8.005 7.115a.75.75 0 0 1-.996-1.121z"
        />
      </svg>
    ))
);
BirdhouseIconDuotone.displayName = "BirdhouseIconDuotone";
export { BirdhouseIconDuotone };
