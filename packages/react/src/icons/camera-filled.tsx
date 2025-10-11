import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CameraIconFilled = memo(
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
          d="M13.287 3c.563 0 1.055-.01 1.514.13.377.114.73.302 1.034.552.37.305.634.72.947 1.188l.219.328c.253.38.309.456.362.509a1 1 0 0 0 .512.273c.074.015.166.02.624.02.853 0 1.518-.012 2.084.172a3.5 3.5 0 0 1 2.245 2.245c.184.565.172 1.23.172 2.084V16c0 .683 0 1.256-.037 1.724-.04.478-.125.933-.345 1.365a3.5 3.5 0 0 1-1.53 1.529c-.431.22-.886.306-1.365.345C19.256 21 18.683 21 18 21H6c-.684 0-1.257 0-1.724-.037-.479-.04-.933-.125-1.365-.345a3.5 3.5 0 0 1-1.53-1.53c-.22-.431-.305-.886-.344-1.364C.999 17.256 1 16.684 1 16v-5.5c0-.853-.012-1.518.172-2.083a3.5 3.5 0 0 1 2.245-2.245C3.982 5.988 4.647 6 5.5 6c.457 0 .55-.005.624-.02a1 1 0 0 0 .511-.273c.054-.053.109-.128.363-.509l.218-.328c.313-.469.577-.882.948-1.188.304-.25.656-.438 1.033-.552.46-.14.95-.13 1.515-.13zM12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CameraIconFilled.displayName = "CameraIconFilled";
export { CameraIconFilled };
