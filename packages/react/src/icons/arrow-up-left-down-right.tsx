import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftDownRightIcon = memo(
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
          d="M10.5 3.25a.75.75 0 0 1 0 1.5H5.81l13.44 13.44V13.5a.75.75 0 0 1 1.5 0V20a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1 0-1.5h4.69L4.75 5.81v4.69a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25z"
        />
      </svg>
    ))
);
ArrowUpLeftDownRightIcon.displayName = "ArrowUpLeftDownRightIcon";
export { ArrowUpLeftDownRightIcon };
