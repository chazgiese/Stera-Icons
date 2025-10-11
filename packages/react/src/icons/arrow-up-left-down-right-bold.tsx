import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftDownRightIconBold = memo(
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
          d="M4 3a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V6.414L17.586 19H13a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1v-7a1 1 0 1 0-2 0v4.586L6.414 5H11a1 1 0 1 0 0-2z"
        />
      </svg>
    ))
);
ArrowUpLeftDownRightIconBold.displayName = "ArrowUpLeftDownRightIconBold";
export { ArrowUpLeftDownRightIconBold };
