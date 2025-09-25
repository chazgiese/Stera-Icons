import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpDownBold = memo(
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
          d="M12 1a1 1 0 0 1 .707.293l5 5a1 1 0 1 1-1.414 1.414L13 4.414v15.172l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.34.066l-.074-.066-5-5a1 1 0 1 1 1.414-1.414L11 19.586V4.414L7.707 7.707a1 1 0 1 1-1.414-1.414l5-5 .073-.066A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
ArrowUpDownBold.displayName = "ArrowUpDownBold";
export { ArrowUpDownBold };
