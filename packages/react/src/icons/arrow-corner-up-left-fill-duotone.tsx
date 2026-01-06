import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpLeftIconFillDuotone = memo(
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
          d="M21 21a1 1 0 0 0 1-1v-8a4 4 0 0 0-4-4H9v2h9a2 2 0 0 1 2 2v8a1 1 0 0 0 1 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.293 14.707A1 1 0 0 0 9 14V4a1 1 0 0 0-1.707-.707l-5 5-.066.073a1 1 0 0 0 .066 1.341z"
        />
      </svg>
    ))
);
ArrowCornerUpLeftIconFillDuotone.displayName =
  "ArrowCornerUpLeftIconFillDuotone";
export { ArrowCornerUpLeftIconFillDuotone };
