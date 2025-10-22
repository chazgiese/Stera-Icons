import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigRightIcon = memo(
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
          d="M9.75 3.207c0-1.113 1.346-1.67 2.134-.884l8.263 8.263a2 2 0 0 1 0 2.828l-8.263 8.263c-.788.787-2.134.23-2.134-.884V16.75H6A2.75 2.75 0 0 1 3.25 14v-4A2.75 2.75 0 0 1 6 7.25h3.75zM11.25 8a.75.75 0 0 1-.75.75H6c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h4.5a.75.75 0 0 1 .75.75v4.19l7.836-7.836a.5.5 0 0 0 0-.707L11.25 3.81z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowBigRightIcon.displayName = "ArrowBigRightIcon";
export { ArrowBigRightIcon };
