import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineRightIconLinetone = memo(
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
          d="M21 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M10.707 4.293a1 1 0 1 0-1.414 1.414L14.586 11H3a1 1 0 1 0 0 2h11.586l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7a1 1 0 0 0 .193-.275 1 1 0 0 0 .057-.141l.013-.05a1 1 0 0 0 .003-.473l-.016-.061a1 1 0 0 0-.057-.14 1 1 0 0 0-.193-.274z"
        />
      </svg>
    ))
);
ArrowLineRightIconLinetone.displayName = "ArrowLineRightIconLinetone";
export { ArrowLineRightIconLinetone };
