import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotationLeftIconLinetone = memo(
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
          <path d="M5.636 5.636A1 1 0 0 1 7.05 7.05a7.001 7.001 0 0 0 4.691 11.945L12 19h.586l1 1-1 1H12l-.333-.006A9 9 0 0 1 5.636 5.636M12.333 3.006a9 9 0 0 1 6.031 15.358 1 1 0 0 1-1.414-1.414A7.001 7.001 0 0 0 12.26 5.005L11.999 5h-.585l-1-1 1-1H12z" />
        </g>
        <path
          fill="currentColor"
          d="M11.293 16.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L13.586 20l-2.293-2.293a1 1 0 0 1 0-1.414M11.293.293a1 1 0 1 1 1.414 1.414L10.414 4l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414z"
        />
      </svg>
    ))
);
RotationLeftIconLinetone.displayName = "RotationLeftIconLinetone";
export { RotationLeftIconLinetone };
