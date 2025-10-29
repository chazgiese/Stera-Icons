import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BankIconLinetone = memo(
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
          <path d="M18.75 17A2.25 2.25 0 0 1 21 19.25V20h-2v-.75a.25.25 0 0 0-.25-.25H5.25a.25.25 0 0 0-.25.25V20H3v-.75A2.25 2.25 0 0 1 5.25 17z" />
          <path
            fillRule="evenodd"
            d="M11.575 2.095a1 1 0 0 1 .98.073l9 6A1 1 0 0 1 21 10H3a1 1 0 0 1-.555-1.832l9-6zM6.303 8h11.394L12 4.201z"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM7 17H5v-7h2zM11 17H9v-7h2zM15 17h-2v-7h2zM19 17h-2v-7h2zM12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
        />
      </svg>
    ))
);
BankIconLinetone.displayName = "BankIconLinetone";
export { BankIconLinetone };
