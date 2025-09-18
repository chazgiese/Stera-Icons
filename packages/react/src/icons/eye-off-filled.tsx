import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeOffFilled = memo(
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
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414M3.196 8.14c.359-.419.993-.415 1.383-.026l10.108 10.108c.518.518.316 1.394-.403 1.544-.738.153-1.502.234-2.284.234-4.924 0-9.107-3.169-10.926-7.622a1 1 0 0 1 0-.756A12.8 12.8 0 0 1 3.196 8.14M12 4c4.924 0 9.107 3.169 10.926 7.622a1 1 0 0 1 0 .756 12.8 12.8 0 0 1-2.122 3.481c-.359.419-.994.415-1.384.026L9.312 5.777c-.518-.518-.316-1.395.403-1.544A11.3 11.3 0 0 1 12 4"
        />
      </svg>
    ))
);
EyeOffFilled.displayName = "EyeOffFilled";
export { EyeOffFilled };
