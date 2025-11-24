import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FrameIconBold = memo(
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
          d="M17.5 2a1 1 0 0 1 1 1v2.5H21a1 1 0 1 1 0 2h-2.5v9H21a1 1 0 1 1 0 2h-2.5V21a1 1 0 1 1-2 0v-2.5h-9V21a1 1 0 1 1-2 0v-2.5H3a1 1 0 1 1 0-2h2.5v-9H3a1 1 0 0 1 0-2h2.5V3a1 1 0 0 1 2 0v2.5h9V3a1 1 0 0 1 1-1m-10 14.5h9v-9h-9z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FrameIconBold.displayName = "FrameIconBold";
export { FrameIconBold };
