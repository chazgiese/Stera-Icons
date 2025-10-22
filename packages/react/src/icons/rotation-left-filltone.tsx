import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotationLeftIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M5.636 5.636A1 1 0 0 1 7.05 7.05a7.001 7.001 0 0 0 4.691 11.945l.26.005a1 1 0 0 1 0 2l-.334-.006A9 9 0 0 1 5.636 5.636M12.333 3.006a9 9 0 0 1 6.031 15.358 1 1 0 0 1-1.414-1.414A7.002 7.002 0 0 0 12.26 5.005L12 5a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M11.617 16.076a1 1 0 0 1 1.09.217l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 23v-6a1 1 0 0 1 .617-.924M11.293.293A1 1 0 0 1 13 1v6a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 0-1.414z"
        />
      </svg>
    ))
);
RotationLeftIconFilltone.displayName = "RotationLeftIconFilltone";
export { RotationLeftIconFilltone };
