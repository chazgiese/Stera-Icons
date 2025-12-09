import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ReceiptIconLinetone = memo(
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
          d="M19.445 1.168A1 1 0 0 1 21 2v20a1 1 0 0 1-1.555.832l-2.391-1.595-1.929 1.544a1 1 0 0 1-1.25 0L12 21.281l-1.875 1.5a1 1 0 0 1-1.25 0l-1.93-1.544-2.39 1.595A1 1 0 0 1 3 22V2l.01-.137a1 1 0 0 1 1.545-.695l2.39 1.593 1.93-1.543.144-.095c.348-.192.786-.16 1.106.095L12 2.718l1.875-1.5.144-.095c.348-.192.786-.16 1.106.095l1.929 1.543zm-6.82 3.613a1 1 0 0 1-1.25 0L9.5 3.281l-1.875 1.5a1 1 0 0 1-1.18.05L5 3.869V20.13l1.445-.963.14-.078a1 1 0 0 1 1.04.128l1.875 1.5 1.875-1.5a1 1 0 0 1 1.25 0l1.875 1.5 1.875-1.5a1 1 0 0 1 1.18-.05L19 20.13V3.868l-1.445.964a1 1 0 0 1-1.18-.051l-1.875-1.5z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16 14.5a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 7.5a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ReceiptIconLinetone.displayName = "ReceiptIconLinetone";
export { ReceiptIconLinetone };
