import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpLeftIconDuotone = memo(
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
          d="M21 20.75a.75.75 0 0 0 .75-.75v-8A3.75 3.75 0 0 0 18 8.25H4.81L4.06 9l.75.75H18A2.25 2.25 0 0 1 20.25 12v8c0 .414.336.75.75.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.47 14.53a.75.75 0 1 0 1.06-1.06L4.06 9l4.47-4.47a.75.75 0 1 0-1.06-1.06l-5 5-.094.114a.75.75 0 0 0 .094.946z"
        />
      </svg>
    ))
);
ArrowCornerUpLeftIconDuotone.displayName = "ArrowCornerUpLeftIconDuotone";
export { ArrowCornerUpLeftIconDuotone };
