import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpRightIconFilled = memo(
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
          d="M15.617 1.076a1 1 0 0 1 1.09.217l5 5a1 1 0 0 1 .158.207l.006.012A1 1 0 0 1 22 7a1 1 0 0 1-.145.515 1 1 0 0 1-.148.192l-5 5A1 1 0 0 1 15 12V8H6a2 2 0 0 0-2 2v11a1 1 0 0 1-2 0V10a4 4 0 0 1 4-4h9V2a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
ArrowCornerUpRightIconFilled.displayName = "ArrowCornerUpRightIconFilled";
export { ArrowCornerUpRightIconFilled };
