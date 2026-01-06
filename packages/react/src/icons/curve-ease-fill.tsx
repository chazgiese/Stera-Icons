import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveEaseIconFill = memo(
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
          d="M19 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6M21 4a1 1 0 1 1 0 2c-2.225 0-3.732.764-4.935 1.911-1.25 1.194-2.181 2.807-3.197 4.585-.984 1.722-2.053 3.609-3.553 5.04C7.768 19.013 5.775 20 3 20a1 1 0 1 1 0-2c2.225 0 3.732-.764 4.935-1.911 1.25-1.194 2.181-2.807 3.197-4.585.984-1.722 2.053-3.609 3.553-5.04C16.232 4.986 18.225 4 21 4M10.938 18a1 1 0 1 1 0 2H10.5a1 1 0 1 1 0-2zM14 18a1 1 0 0 1 0 2h-.437a1 1 0 1 1 0-2zM5 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6M10.54 4.005a1 1 0 0 1 0 1.99L10.438 6H10a1 1 0 0 1 0-2h.438zM13.603 4.005a1 1 0 0 1 0 1.99L13.5 6h-.437a1 1 0 1 1 0-2h.437z"
        />
      </svg>
    ))
);
CurveEaseIconFill.displayName = "CurveEaseIconFill";
export { CurveEaseIconFill };
