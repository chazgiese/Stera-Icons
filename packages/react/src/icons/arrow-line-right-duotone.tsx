import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineRightIconDuotone = memo(
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
          d="M21 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.47 4.47a.75.75 0 0 1 1.06 0l7 7a.8.8 0 0 1 .118.16q.025.04.044.083a.75.75 0 0 1-.078.715 1 1 0 0 1-.084.102l-7 7a.75.75 0 1 1-1.06-1.06l5.72-5.72H3a.75.75 0 0 1 0-1.5h12.19L9.47 5.53a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ArrowLineRightIconDuotone.displayName = "ArrowLineRightIconDuotone";
export { ArrowLineRightIconDuotone };
