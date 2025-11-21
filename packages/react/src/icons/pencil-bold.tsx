import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilIconBold = memo(
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
          d="M16.41 1.677a2.25 2.25 0 0 1 3.18 0l2.733 2.732a2.25 2.25 0 0 1 0 3.182L8.707 21.206a1 1 0 0 1-.607.288l-5 .5A1 1 0 0 1 2.005 20.9l.5-5 .032-.17c.046-.164.134-.316.256-.438zM4.458 16.453l-.343 3.43 3.429-.344 9.54-9.54-3.086-3.086zM18.177 3.091a.25.25 0 0 0-.354 0L15.413 5.5 18.5 8.585l2.41-2.408a.25.25 0 0 0 0-.354z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilIconBold.displayName = "PencilIconBold";
export { PencilIconBold };
