import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HourglassIconBold = memo(
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
          d="M14.562 6.068a1 1 0 0 1 .625 1.782l-1.285 1.027c-.437.35-.777.767-1.022 1.22a1 1 0 0 1-.15.206 6.4 6.4 0 0 0-.23 1.691q0 1.734.376 3.468l2.831 2.831A1 1 0 0 1 15 20H9a1 1 0 0 1-.707-1.707l2.83-2.831q.376-1.734.377-3.468 0-.846-.231-1.691a1 1 0 0 1-.149-.205 4 4 0 0 0-1.022-1.221L8.813 7.85a1 1 0 0 1 .625-1.782z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17 1a3 3 0 0 1 3 3v1.116a7 7 0 0 1-2.627 5.466l-1.284 1.027a.5.5 0 0 0 0 .782l1.284 1.027A7 7 0 0 1 20 18.884V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.116a7 7 0 0 1 2.627-5.466l1.284-1.027a.5.5 0 0 0 0-.782l-1.284-1.027A7 7 0 0 1 4 5.116V4a3 3 0 0 1 3-3zM7 3a1 1 0 0 0-1 1v1.116a5 5 0 0 0 1.877 3.905l1.283 1.027a2.5 2.5 0 0 1 0 3.904L7.877 14.98A5 5 0 0 0 6 18.885V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.116a5 5 0 0 0-1.877-3.905l-1.283-1.027a2.5 2.5 0 0 1 0-3.904l1.283-1.027A5 5 0 0 0 18 5.116V4a1 1 0 0 0-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HourglassIconBold.displayName = "HourglassIconBold";
export { HourglassIconBold };
