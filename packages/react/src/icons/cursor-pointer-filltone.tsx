import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorPointerIconFilltone = memo(
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
          d="M10 3a1 1 0 0 1 1 1v7a1 1 0 0 0 2 0V9a1 1 0 0 1 2 0v2.5a1 1 0 0 0 2 0V10a1 1 0 0 1 2 0v4a7 7 0 0 1-13.905 1.158 1 1 0 0 0-.022-.101l-.033-.099-1.222-3.116-.065-.135-.046-.092a1 1 0 0 1 1.778-.908l.005.008 1.65 2.794A1 1 0 0 0 9 13V4a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 1a3 3 0 0 1 3 3v2.174a2.996 2.996 0 0 1 3.527 1.214A3 3 0 0 1 21 10v4a9 9 0 0 1-17.857 1.6l-1.165-2.972A3 3 0 0 1 7 9.382V4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v9a1 1 0 0 1-1.86.509l-1.65-2.794-.005-.008a.997.997 0 0 0-1.366-.366 1 1 0 0 0-.412 1.274l.046.092.065.135 1.222 3.116.033.099q.014.05.022.101A7 7 0 0 0 19 14v-4a1 1 0 1 0-2 0v1.5a1 1 0 1 1-2 0V9a1 1 0 1 0-2 0v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CursorPointerIconFilltone.displayName = "CursorPointerIconFilltone";
export { CursorPointerIconFilltone };
