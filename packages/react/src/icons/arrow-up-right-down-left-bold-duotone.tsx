import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightDownLeftIconBoldDuotone = memo(
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
          d="M19 5v1.414L6.414 19H5v-1.414L17.586 5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4 12.5a1 1 0 0 1 1 1V19h5.5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1-1M20 3a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V5h-5.5a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ArrowUpRightDownLeftIconBoldDuotone.displayName =
  "ArrowUpRightDownLeftIconBoldDuotone";
export { ArrowUpRightDownLeftIconBoldDuotone };
