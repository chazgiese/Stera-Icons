import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigRightIconDuotone = memo(
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
          d="M9.75 3.207c0-1.114 1.346-1.671 2.134-.884l8.263 8.263a2 2 0 0 1 0 2.828l-8.263 8.262c-.788.788-2.134.23-2.134-.883V16a.75.75 0 0 1 1.5 0v4.189l7.836-7.836a.5.5 0 0 0 0-.707L11.25 3.81V8a.75.75 0 0 1-1.5 0z"
        />
        <path
          fill="currentColor"
          d="M9.75 7.25V8a.75.75 0 0 0 .673.746l.077.004h-5a.75.75 0 0 0-.75.75v5c0 .414.336.75.75.75h5a.75.75 0 0 0-.75.75v.75H5.5a2.25 2.25 0 0 1-2.25-2.25v-5A2.25 2.25 0 0 1 5.5 7.25z"
          opacity={0.4}
        />
      </svg>
    ))
);
ArrowBigRightIconDuotone.displayName = "ArrowBigRightIconDuotone";
export { ArrowBigRightIconDuotone };
