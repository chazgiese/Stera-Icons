import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpIconFillDuotone = memo(
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
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 5a1 1 0 0 0-.707.293l-5 5a1 1 0 1 0 1.414 1.414L11 9.414V17a1 1 0 0 0 2 0V9.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5A1 1 0 0 0 12 6"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 18a1 1 0 0 1-1-1V9.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 1 1-1.414 1.414L13 9.414V17a1 1 0 0 1-1 1"
        />
      </svg>
    ))
);
ArrowCircleUpIconFillDuotone.displayName = "ArrowCircleUpIconFillDuotone";
export { ArrowCircleUpIconFillDuotone };
