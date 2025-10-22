import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextStrikethroughIcon = memo(
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
          d="M17 2.25a.75.75 0 0 1 0 1.5h-5.5a3.75 3.75 0 0 0-.154 7.496h10.659a.75.75 0 0 1 0 1.5h-4.837A5.25 5.25 0 0 1 13.5 21.75H7a.75.75 0 0 1 0-1.5h6.5a3.75 3.75 0 1 0 0-7.5h-1l-.077-.004h-.346L12 12.75h-.5q-.078 0-.154-.004H2.005a.75.75 0 0 1 0-1.5h5.82A5.25 5.25 0 0 1 11.5 2.25z"
        />
      </svg>
    ))
);
TextStrikethroughIcon.displayName = "TextStrikethroughIcon";
export { TextStrikethroughIcon };
