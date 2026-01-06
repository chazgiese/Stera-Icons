import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotationRightIconDuotone = memo(
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
          <path d="M17.127 5.813a.75.75 0 0 1 1.06 0A8.75 8.75 0 0 1 12 20.75h-1.19l-.75-.75.75-.75H12a7.251 7.251 0 0 0 5.127-12.377.75.75 0 0 1 0-1.06M13.94 4l-.75.75H12a7.25 7.25 0 0 0-6.698 4.476 7.25 7.25 0 0 0 1.57 7.901.75.75 0 1 1-1.06 1.06A8.751 8.751 0 0 1 12 3.25h1.19z" />
        </g>
        <path
          fill="currentColor"
          d="M11.47 16.47a.75.75 0 1 1 1.06 1.06L10.06 20l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06zM11.47.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L13.94 4l-2.47-2.47a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
RotationRightIconDuotone.displayName = "RotationRightIconDuotone";
export { RotationRightIconDuotone };
