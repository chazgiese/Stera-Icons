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
          d="M6.707 5.293a1 1 0 1 0-1.414 1.414L15.586 17H8a1 1 0 1 0 0 2h10a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v7.586z"
        />
      </svg>
    ))
);
ArrowDownRightIconBold.displayName = "ArrowDownRightIconBold";
export { ArrowDownRightIconBold };
