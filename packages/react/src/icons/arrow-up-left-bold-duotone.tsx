import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftIconBoldDuotone = memo(
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
          d="M18.707 17.293a1 1 0 0 1-1.414 1.414L7 8.414V7h1.414z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16 5a1 1 0 0 1 0 2H7v9a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
ArrowUpLeftIconBoldDuotone.displayName = "ArrowUpLeftIconBoldDuotone";
export { ArrowUpLeftIconBoldDuotone };
