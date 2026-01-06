import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftDownRightIconBoldDuotone = memo(
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
          d="M19 17.586V19h-1.414L5 6.414V5h1.414z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M20 12.5a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1h-6.5a1 1 0 1 1 0-2H19v-5.5a1 1 0 0 1 1-1M10.5 3a1 1 0 1 1 0 2H5v5.5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
ArrowUpLeftDownRightIconBoldDuotone.displayName =
  "ArrowUpLeftDownRightIconBoldDuotone";
export { ArrowUpLeftDownRightIconBoldDuotone };
