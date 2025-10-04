import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpRight = memo(
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
          d="M16.53 1.47a.75.75 0 1 0-1.06 1.06l3.72 3.72H6A3.75 3.75 0 0 0 2.25 10v11a.75.75 0 0 0 1.5 0V10A2.25 2.25 0 0 1 6 7.75h13.19l-3.72 3.72a.75.75 0 1 0 1.06 1.06l5-5a.75.75 0 0 0 .214-.626l-.006-.034q-.003-.02-.01-.04a1 1 0 0 0-.027-.092l-.018-.048a1 1 0 0 0-.059-.106l-.094-.114z"
        />
      </svg>
    ))
);
ArrowCornerUpRight.displayName = "ArrowCornerUpRight";
export { ArrowCornerUpRight };
