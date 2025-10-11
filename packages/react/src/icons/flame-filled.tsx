import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlameIconFilled = memo(
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
          d="M11.37 1.223c.367-.287.852-.327 1.26 0 .41.327.879.755 1.3 1.145a38 38 0 0 1 2.827 2.915c1.027 1.188 2.076 2.577 2.872 4.045.791 1.458 1.37 3.065 1.371 4.672a9 9 0 0 1-18 0c0-1.607.58-3.214 1.371-4.672.796-1.468 1.844-2.857 2.872-4.045a38 38 0 0 1 2.827-2.915c.421-.39.93-.857 1.3-1.145M12 11.5s-3.5 3-3.5 6c0 2.5 2 3.5 3.5 3.5s3.5-1 3.5-3.5c0-3-3.5-6-3.5-6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlameIconFilled.displayName = "FlameIconFilled";
export { FlameIconFilled };
