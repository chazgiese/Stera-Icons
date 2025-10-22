import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpIconBold = memo(
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
          d="M12 18a1 1 0 0 1-1-1V9.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 1 1-1.414 1.414L13 9.414V17a1 1 0 0 1-1 1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11m0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleUpIconBold.displayName = "ArrowCircleUpIconBold";
export { ArrowCircleUpIconBold };
