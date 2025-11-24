import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TallyMarksIconLinetone = memo(
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
          <path d="M7 20a1 1 0 1 1-2 0v-2.634l2-1.199zM11 20a1 1 0 1 1-2 0v-5.033l2-1.2zM15 20a1 1 0 1 1-2 0v-7.434l2-1.2zM19 20a1 1 0 1 1-2 0v-9.834l2-1.2zM6 3a1 1 0 0 1 1 1v9.834l-2 1.2V4a1 1 0 0 1 1-1M10 3a1 1 0 0 1 1 1v7.434l-2 1.2V4a1 1 0 0 1 1-1M14 3a1 1 0 0 1 1 1v5.034l-2 1.2V4a1 1 0 0 1 1-1M18 3a1 1 0 0 1 1 1v2.634l-2 1.2V4a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M22.857 5.486a1 1 0 0 0-1.372-.342l-20 11.999a1 1 0 0 0 1.03 1.715l20-12a1 1 0 0 0 .342-1.372"
        />
      </svg>
    ))
);
TallyMarksIconLinetone.displayName = "TallyMarksIconLinetone";
export { TallyMarksIconLinetone };
