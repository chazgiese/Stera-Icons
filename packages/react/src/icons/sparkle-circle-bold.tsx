import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleCircleBold = memo(
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
          d="M12 6a1 1 0 0 1 .919.606l.87 2.03a3 3 0 0 0 1.575 1.575l2.03.87a1 1 0 0 1 0 1.838l-2.03.87a3 3 0 0 0-1.575 1.575l-.87 2.03a1 1 0 0 1-1.838 0l-.87-2.03a3 3 0 0 0-1.575-1.575l-2.03-.87a1 1 0 0 1 0-1.838l2.03-.87a3 3 0 0 0 1.575-1.575l.87-2.03.068-.131A1 1 0 0 1 12 6m0 3.53A5 5 0 0 1 9.53 12 5 5 0 0 1 12 14.469 5 5 0 0 1 14.469 12 5 5 0 0 1 12 9.53"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparkleCircleBold.displayName = "SparkleCircleBold";
export { SparkleCircleBold };
