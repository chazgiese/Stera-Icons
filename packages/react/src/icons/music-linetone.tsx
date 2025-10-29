import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MusicIconLinetone = memo(
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
          d="M18.38 2.256A2.25 2.25 0 0 1 21 4.476V15.5l-.001.014A3.06 3.06 0 0 0 19 12.693V4.476a.25.25 0 0 0-.291-.247l-9.5 1.584A.25.25 0 0 0 9 6.059V17.5l-.002.02A3.06 3.06 0 0 0 7 14.694V6.059c0-1.1.795-2.038 1.88-2.219z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 8.18V6.153L9 7.82v2.027zM5.938 14.5A3.06 3.06 0 0 1 9 17.563 4.44 4.44 0 0 1 4.563 22 3.06 3.06 0 0 1 1.5 18.938 4.437 4.437 0 0 1 5.938 14.5m0 2A2.437 2.437 0 0 0 3.5 18.938c0 .586.476 1.062 1.063 1.062A2.437 2.437 0 0 0 7 17.563c0-.587-.476-1.063-1.062-1.063M17.938 12.5A3.06 3.06 0 0 1 21 15.563 4.44 4.44 0 0 1 16.563 20a3.06 3.06 0 0 1-3.063-3.062 4.437 4.437 0 0 1 4.438-4.438m0 2a2.437 2.437 0 0 0-2.438 2.438c0 .586.476 1.062 1.063 1.062A2.437 2.437 0 0 0 19 15.563c0-.587-.476-1.063-1.062-1.063"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MusicIconLinetone.displayName = "MusicIconLinetone";
export { MusicIconLinetone };
