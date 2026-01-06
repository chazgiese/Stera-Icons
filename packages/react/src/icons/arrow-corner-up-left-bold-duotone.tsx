import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpLeftIconBoldDuotone = memo(
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
          d="M21 21a1 1 0 0 0 1-1v-8a4 4 0 0 0-4-4H5.414l-1 1 1 1H18a2 2 0 0 1 2 2v8a1 1 0 0 0 1 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.293 14.707a1 1 0 1 0 1.414-1.414L4.414 9l4.293-4.293a1 1 0 1 0-1.414-1.414l-5 5-.066.073a1 1 0 0 0 .066 1.34z"
        />
      </svg>
    ))
);
ArrowCornerUpLeftIconBoldDuotone.displayName =
  "ArrowCornerUpLeftIconBoldDuotone";
export { ArrowCornerUpLeftIconBoldDuotone };
