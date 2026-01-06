import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftDownRightIconDuotone = memo(
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
          d="M19.25 18.19v1.06h-1.06L4.75 5.81V4.75h1.06z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M20 12.75a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1 0-1.5h5.75V13.5a.75.75 0 0 1 .75-.75M10.5 3.25a.75.75 0 0 1 0 1.5H4.75v5.75a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25z"
        />
      </svg>
    ))
);
ArrowUpLeftDownRightIconDuotone.displayName = "ArrowUpLeftDownRightIconDuotone";
export { ArrowUpLeftDownRightIconDuotone };
