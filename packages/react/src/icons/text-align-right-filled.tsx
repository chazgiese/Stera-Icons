import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextAlignRightFilled = memo(
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
          d="M7 17a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zM11 11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zM3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2z"
        />
      </svg>
    ))
);
TextAlignRightFilled.displayName = "TextAlignRightFilled";
export { TextAlignRightFilled };
