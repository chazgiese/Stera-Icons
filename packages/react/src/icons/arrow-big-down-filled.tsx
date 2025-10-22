import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigDownIconFilled = memo(
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
          d="M15 3.25c.966 0 1.75.784 1.75 1.75v4.75h4.043c1.113 0 1.67 1.346.883 2.134l-8.262 8.263a2 2 0 0 1-2.828 0l-8.263-8.263c-.787-.788-.23-2.134.884-2.134H7.25V5c0-.966.783-1.75 1.75-1.75z"
        />
      </svg>
    ))
);
ArrowBigDownIconFilled.displayName = "ArrowBigDownIconFilled";
export { ArrowBigDownIconFilled };
