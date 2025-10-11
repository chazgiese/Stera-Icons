import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveEaseIcon = memo(
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
          d="M19 16.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M21 4.25a.75.75 0 0 1 0 1.5c-2.294 0-3.862.792-5.107 1.98-1.282 1.224-2.23 2.871-3.242 4.642-.988 1.73-2.04 3.582-3.508 4.983C7.638 18.792 5.706 19.75 3 19.75a.75.75 0 0 1 0-1.5c2.294 0 3.862-.792 5.107-1.98 1.282-1.224 2.23-2.871 3.242-4.642.988-1.73 2.04-3.582 3.508-4.983C16.362 5.209 18.294 4.25 21 4.25M10.938 18.25a.75.75 0 0 1 0 1.5H10.5a.75.75 0 0 1 0-1.5zM14 18.25a.75.75 0 0 1 0 1.5h-.437a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 2.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M10.438 4.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM13.5 4.25a.75.75 0 0 1 0 1.5h-.437a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
CurveEaseIcon.displayName = "CurveEaseIcon";
export { CurveEaseIcon };
