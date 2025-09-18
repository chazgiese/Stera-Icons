import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftDownRight = memo(
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
          d="M11 3.25a.75.75 0 0 1 0 1.5H5.81l13.44 13.44V13a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1 0-1.5h5.19L4.75 5.81V11a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25z"
        />
      </svg>
    ))
);
ArrowUpLeftDownRight.displayName = "ArrowUpLeftDownRight";
export { ArrowUpLeftDownRight };
