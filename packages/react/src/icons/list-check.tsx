import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListCheckIcon = memo(
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
          d="M5.452 15.989a.75.75 0 1 1 1.096 1.023l-2.8 3a.75.75 0 0 1-1.162-.082l-1.2-1.714a.75.75 0 0 1 1.228-.86l.669.955zM22 17.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM5.452 9.989a.75.75 0 1 1 1.096 1.023l-2.8 3a.75.75 0 0 1-1.162-.082l-1.2-1.714a.75.75 0 0 1 1.228-.86l.669.955zM22 11.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM5.452 3.989a.75.75 0 0 1 1.096 1.023l-2.8 3a.75.75 0 0 1-1.162-.082l-1.2-1.714a.75.75 0 0 1 1.228-.86l.669.955zM22 5.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ListCheckIcon.displayName = "ListCheckIcon";
export { ListCheckIcon };
