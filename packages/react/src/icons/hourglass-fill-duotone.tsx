import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HourglassIconFillDuotone = memo(
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
          d="M17 1a3 3 0 0 1 3 3v1.116a7 7 0 0 1-2.627 5.466l-1.284 1.027a.5.5 0 0 0 0 .782l1.284 1.027A7 7 0 0 1 20 18.884V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.116a7 7 0 0 1 2.627-5.466l1.284-1.027a.5.5 0 0 0 0-.782l-1.284-1.027A7 7 0 0 1 4 5.116V4a3 3 0 0 1 3-3zM9.438 6.068a1 1 0 0 0-.625 1.782l1.285 1.027c.437.35.777.767 1.022 1.22.31.574.38 1.238.38 1.897q0 1.3-.213 2.6a2.75 2.75 0 0 1-.788 1.492l-2.206 2.207A1 1 0 0 0 9 20h6a1 1 0 0 0 .707-1.707L13.5 16.086a2.75 2.75 0 0 1-.788-1.491 16 16 0 0 1-.212-2.6c0-.661.07-1.324.38-1.897.245-.454.585-.87 1.022-1.221l1.285-1.027a1 1 0 0 0-.625-1.782z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14.562 6.068a1 1 0 0 1 .625 1.782l-1.285 1.027c-.437.35-.777.767-1.022 1.22-.31.574-.38 1.237-.38 1.897q0 1.3.212 2.6c.092.57.38 1.085.788 1.492l2.207 2.207A1 1 0 0 1 15 20H9a1 1 0 0 1-.707-1.707l2.206-2.207c.407-.408.695-.923.788-1.491q.212-1.3.213-2.6c0-.66-.07-1.324-.38-1.897a4 4 0 0 0-1.022-1.221L8.813 7.85a1 1 0 0 1 .625-1.782z"
        />
      </svg>
    ))
);
HourglassIconFillDuotone.displayName = "HourglassIconFillDuotone";
export { HourglassIconFillDuotone };
