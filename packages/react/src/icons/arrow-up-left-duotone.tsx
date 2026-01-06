import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftIconDuotone = memo(
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
          d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L6.75 7.81V6.75h1.06z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16 5.25a.75.75 0 0 1 0 1.5H6.75V16a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 6 5.25z"
        />
      </svg>
    ))
);
ArrowUpLeftIconDuotone.displayName = "ArrowUpLeftIconDuotone";
export { ArrowUpLeftIconDuotone };
