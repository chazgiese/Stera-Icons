import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DollarBillIconFillDuotone = memo(
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
          d="M20 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM3 16a1 1 0 0 0 1 1h2.457c-.1-1.05-.383-1.883-.978-2.479-.596-.594-1.43-.879-2.479-.978zm18-2.457c-1.05.1-1.884.384-2.479.979-.594.595-.879 1.429-.978 2.478H20a1 1 0 0 0 1-1zM12 8.25c-1.917 0-3.25 1.813-3.25 3.75s1.333 3.75 3.25 3.75 3.25-1.813 3.25-3.75S13.917 8.25 12 8.25M4 7a1 1 0 0 0-1 1v2.457c1.05-.1 1.883-.384 2.479-.978.595-.596.879-1.43.978-2.479zm13.543 0c.1 1.05.384 1.883.979 2.479.595.595 1.429.879 2.478.978V8a1 1 0 0 0-.898-.995L20 7z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3 13.543c1.05.1 1.883.384 2.479.979.595.595.879 1.429.978 2.478H4a1 1 0 0 1-1-1zM21 16a1 1 0 0 1-1 1h-2.457c.1-1.05.384-1.883.979-2.479.595-.594 1.429-.879 2.478-.978zM12 8.25c1.917 0 3.25 1.813 3.25 3.75s-1.333 3.75-3.25 3.75S8.75 13.937 8.75 12 10.083 8.25 12 8.25M6.457 7c-.1 1.05-.383 1.883-.978 2.479-.596.595-1.43.879-2.479.978V8a1 1 0 0 1 1-1zM20.103 7.005A1 1 0 0 1 21 8v2.457c-1.05-.1-1.884-.384-2.479-.978-.594-.596-.879-1.43-.978-2.479H20z"
        />
      </svg>
    ))
);
DollarBillIconFillDuotone.displayName = "DollarBillIconFillDuotone";
export { DollarBillIconFillDuotone };
