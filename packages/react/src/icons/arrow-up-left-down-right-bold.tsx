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
          d="M10.5 3a1 1 0 1 1 0 2H6.414L19 17.586V13.5a1 1 0 1 1 2 0V20a1 1 0 0 1-1 1h-6.5a1 1 0 1 1 0-2h4.086L5 6.414V10.5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
ArrowUpLeftDownRightIconBold.displayName = "ArrowUpLeftDownRightIconBold";
export { ArrowUpLeftDownRightIconBold };
