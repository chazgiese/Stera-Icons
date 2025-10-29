import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotationRightIconLinetone = memo(
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
          <path d="M16.95 5.636a1 1 0 0 1 1.414 0 9.001 9.001 0 0 1-6.031 15.358L12 21h-.586l-1-1 1-1H12l.259-.005A7 7 0 0 0 16.95 7.05a1 1 0 0 1 0-1.414M13.586 4l-1 1H12l-.259.005A7 7 0 0 0 7.05 16.95a1 1 0 0 1-1.414 1.414 9 9 0 0 1 6.03-15.358L12 3h.586z" />
        </g>
        <path
          fill="currentColor"
          d="M12.707 16.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L10.414 20l2.293-2.293a1 1 0 0 0 0-1.414M12.707.293a1 1 0 1 0-1.414 1.414L13.586 4l-2.293 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z"
        />
      </svg>
    ))
);
RotationRightIconLinetone.displayName = "RotationRightIconLinetone";
export { RotationRightIconLinetone };
