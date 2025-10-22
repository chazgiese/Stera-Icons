import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListCheckSimpleIcon = memo(
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
          d="M7.483 12.957a.75.75 0 0 1 1.035 1.086l-4.2 4a.75.75 0 0 1-1.107-.08l-1.8-2.284a.75.75 0 0 1 1.178-.93l1.29 1.64zM22 14.75a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5zM7.483 5.957a.75.75 0 0 1 1.035 1.086l-4.2 4a.75.75 0 0 1-1.107-.08l-1.8-2.284a.75.75 0 0 1 1.178-.93l1.29 1.64zM22 7.75a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ListCheckSimpleIcon.displayName = "ListCheckSimpleIcon";
export { ListCheckSimpleIcon };
