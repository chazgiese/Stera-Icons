import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotateCircleLeftIconLinetone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.294 5.293a1 1 0 0 1 1.413 1.414L10.416 8H12.5a5 5 0 1 1-4.084 7.886 1 1 0 0 1 1.632-1.155A3 3 0 1 0 12.5 10h-2.085l1.293 1.292a1 1 0 0 1-1.415 1.414l-2.93-2.93a1.1 1.1 0 0 1 0-1.554z"
        />
      </svg>
    ))
);
RotateCircleLeftIconLinetone.displayName = "RotateCircleLeftIconLinetone";
export { RotateCircleLeftIconLinetone };
