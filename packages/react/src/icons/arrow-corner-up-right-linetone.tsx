import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpRightIconLinetone = memo(
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
          d="m19.586 7-1 1H6a2 2 0 0 0-2 2v11a1 1 0 1 1-2 0V10a4 4 0 0 1 4-4h12.586z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.293 1.293a1 1 0 0 1 1.414 0l5 5 .067.073a1 1 0 0 1-.067 1.341l-5 5a1 1 0 0 1-1.414-1.414L19.586 7l-4.293-4.293a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowCornerUpRightIconLinetone.displayName = "ArrowCornerUpRightIconLinetone";
export { ArrowCornerUpRightIconLinetone };
