import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FrameIconDuotone = memo(
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
          d="M16.75 7.25h1.5v9.5h-1.5v1.5h-9.5v-1.5h-1.5v-9.5h1.5v-1.5h9.5zm-9.5 9.5h9.5v-9.5h-9.5z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.25 21a.75.75 0 0 1-1.5 0v-2.75H3a.75.75 0 0 1 0-1.5h4.25zM21 16.75a.75.75 0 0 1 0 1.5h-2.75V21a.75.75 0 0 1-1.5 0v-4.25zM6.5 2.25a.75.75 0 0 1 .75.75v4.25H3a.75.75 0 0 1 0-1.5h2.75V3a.75.75 0 0 1 .75-.75M17.5 2.25a.75.75 0 0 1 .75.75v2.75H21a.75.75 0 0 1 0 1.5h-4.25V3a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
FrameIconDuotone.displayName = "FrameIconDuotone";
export { FrameIconDuotone };
