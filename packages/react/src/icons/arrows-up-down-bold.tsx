import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsUpDownIconBold = memo(
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
          d="M17 3a1 1 0 0 1 1 1v15.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.338.068l-.076-.068-4-4a1 1 0 1 1 1.414-1.414L16 19.586V4a1 1 0 0 1 1-1M7 2a1 1 0 0 1 .707.293l4 4a1 1 0 1 1-1.414 1.414L8 5.414V21a1 1 0 0 1-2 0V5.414L3.707 7.707a1 1 0 1 1-1.414-1.414l4-4 .073-.066A1 1 0 0 1 7 2"
        />
      </svg>
    ))
);
ArrowsUpDownIconBold.displayName = "ArrowsUpDownIconBold";
export { ArrowsUpDownIconBold };
