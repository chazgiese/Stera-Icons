import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowDownRightIconBold = memo(
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
          d="M5.293 5.293a1 1 0 0 1 1.414 0L17 15.586V8a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h7.586L5.293 6.707a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowDownRightIconBold.displayName = "ArrowDownRightIconBold";
export { ArrowDownRightIconBold };
