import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleCircleFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 5a1 1 0 0 0-.85.475l-.069.131-.87 2.03a3 3 0 0 1-1.575 1.575l-2.03.87a1 1 0 0 0 0 1.838l2.03.87a3 3 0 0 1 1.575 1.575l.87 2.03a1 1 0 0 0 1.838 0l.87-2.03a3 3 0 0 1 1.575-1.575l2.03-.87a1 1 0 0 0 0-1.838l-2.03-.87a3 3 0 0 1-1.575-1.575l-.87-2.03A1 1 0 0 0 12 6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparkleCircleFilled.displayName = "SparkleCircleFilled";
export { SparkleCircleFilled };
