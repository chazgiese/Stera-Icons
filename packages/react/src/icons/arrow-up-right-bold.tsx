import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightIconBold = memo(
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
          d="M6.707 18.707a1 1 0 1 1-1.414-1.414L15.586 7H8a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V8.414z"
        />
      </svg>
    ))
);
ArrowUpRightIconBold.displayName = "ArrowUpRightIconBold";
export { ArrowUpRightIconBold };
