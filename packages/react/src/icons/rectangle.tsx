import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RectangleIcon = memo(
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
          d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H6A4.75 4.75 0 0 1 1.25 16V8A4.75 4.75 0 0 1 6 3.25zM6 4.75A3.25 3.25 0 0 0 2.75 8v8A3.25 3.25 0 0 0 6 19.25h12A3.25 3.25 0 0 0 21.25 16V8A3.25 3.25 0 0 0 18 4.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RectangleIcon.displayName = "RectangleIcon";
export { RectangleIcon };
