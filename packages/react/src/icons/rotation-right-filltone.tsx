import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotationRightIconFilltone = memo(
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
          <path d="M18.364 5.636A1 1 0 0 0 16.95 7.05a7.001 7.001 0 0 1-4.691 11.945l-.26.005a1 1 0 0 0 0 2l.334-.006a9 9 0 0 0 6.031-15.358M11.667 3.006a9 9 0 0 0-6.031 15.358A1 1 0 0 0 7.05 16.95 7.002 7.002 0 0 1 11.74 5.005L12 5a1 1 0 1 0 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M12.383 16.076a1 1 0 0 0-1.09.217l-3 3a1 1 0 0 0 0 1.414l3 3A1 1 0 0 0 13 23v-6a1 1 0 0 0-.617-.924M12.707.293A1 1 0 0 0 11 1v6a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414z"
        />
      </svg>
    ))
);
RotationRightIconFilltone.displayName = "RotationRightIconFilltone";
export { RotationRightIconFilltone };
