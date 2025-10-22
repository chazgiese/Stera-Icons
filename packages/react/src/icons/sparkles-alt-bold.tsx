import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparklesAltIconBold = memo(
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
          d="M7.5 10a1 1 0 0 1 .977.783 6.24 6.24 0 0 0 4.74 4.74 1 1 0 0 1 0 1.954 6.24 6.24 0 0 0-4.74 4.74 1 1 0 0 1-1.954 0 6.24 6.24 0 0 0-4.74-4.74 1 1 0 0 1 0-1.954 6.24 6.24 0 0 0 4.74-4.74A1 1 0 0 1 7.5 10m0 3.667A8.25 8.25 0 0 1 4.667 16.5 8.25 8.25 0 0 1 7.5 19.333a8.25 8.25 0 0 1 2.833-2.833A8.25 8.25 0 0 1 7.5 13.667M16.5 1a1 1 0 0 1 .977.783 6.24 6.24 0 0 0 4.74 4.74 1 1 0 0 1 0 1.954 6.24 6.24 0 0 0-4.74 4.74 1 1 0 0 1-1.954 0 6.24 6.24 0 0 0-4.74-4.74 1 1 0 0 1 0-1.954 6.24 6.24 0 0 0 4.74-4.74A1 1 0 0 1 16.5 1m0 3.667A8.25 8.25 0 0 1 13.667 7.5a8.25 8.25 0 0 1 2.833 2.833A8.25 8.25 0 0 1 19.333 7.5 8.25 8.25 0 0 1 16.5 4.667"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparklesAltIconBold.displayName = "SparklesAltIconBold";
export { SparklesAltIconBold };
