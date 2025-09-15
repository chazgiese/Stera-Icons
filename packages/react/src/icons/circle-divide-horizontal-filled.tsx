import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideHorizontalFilled = memo(
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
          d="M22.406 13c.294 0 .526.253.485.544C22.14 18.888 17.55 23 12 23 6.448 23 1.86 18.888 1.11 13.544A.482.482 0 0 1 1.594 13zM12 1c5.551 0 10.14 4.112 10.89 9.456.042.29-.19.544-.484.544H1.594a.482.482 0 0 1-.484-.544C1.86 5.112 6.45 1 12 1"
        />
      </svg>
    ))
);
CircleDivideHorizontalFilled.displayName = "CircleDivideHorizontalFilled";
export { CircleDivideHorizontalFilled };
