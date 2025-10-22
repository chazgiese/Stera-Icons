import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const XCircleIconFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M9.207 7.793a1 1 0 0 0-1.414 1.414L10.589 12l-2.796 2.793a1 1 0 0 0 1.414 1.414l2.796-2.794 2.79 2.787a1 1 0 0 0 1.414-1.415L13.418 12l2.789-2.785A1 1 0 0 0 14.793 7.8l-2.79 2.786z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
XCircleIconFilled.displayName = "XCircleIconFilled";
export { XCircleIconFilled };
