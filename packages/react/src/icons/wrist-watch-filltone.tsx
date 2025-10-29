import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WristWatchIconFilltone = memo(
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
          d="M12 4a7.999 7.999 0 0 1 2.29 15.665 8 8 0 0 1-4.793-.066A8.002 8.002 0 0 1 9.71 4.334 8 8 0 0 1 12 4m0 4.5a1 1 0 0 0-1 1V12a1 1 0 0 0 .293.707l1.5 1.5a1 1 0 1 0 1.414-1.414L13 11.586V9.5a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17 21a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2.755A7.97 7.97 0 0 0 12 20c1.892 0 3.63-.657 5-1.755zM12 8.5a1 1 0 0 1 1 1v2.086l1.207 1.207a1 1 0 1 1-1.414 1.414l-1.5-1.5A1 1 0 0 1 11 12V9.5a1 1 0 0 1 1-1M14 0a3 3 0 0 1 3 3v2.755A7.97 7.97 0 0 0 12 4c-1.892 0-3.63.657-5 1.755V3a3 3 0 0 1 3-3z"
        />
      </svg>
    ))
);
WristWatchIconFilltone.displayName = "WristWatchIconFilltone";
export { WristWatchIconFilltone };
