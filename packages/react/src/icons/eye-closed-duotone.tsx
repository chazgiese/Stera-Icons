import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIconDuotone = memo(
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
          d="M20.293 8.651a.75.75 0 0 1 1.328.698c-1.747 3.332-5.414 5.598-9.62 5.598-4.207 0-7.873-2.266-9.621-5.598a.75.75 0 0 1 1.328-.698c1.478 2.82 4.622 4.796 8.293 4.796s6.814-1.976 8.292-4.796"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M8.494 14.398q.708.23 1.455.365l-.706 2.445a.75.75 0 0 1-1.44-.416zM16.198 16.792a.75.75 0 0 1-1.441.416l-.707-2.445q.748-.135 1.455-.365zM3.883 11.474q.51.551 1.098 1.027L3.01 14.328a.75.75 0 1 1-1.02-1.1zM22.01 13.229a.75.75 0 0 1-1.02 1.1L19.02 12.5q.588-.476 1.096-1.027z" />
        </g>
      </svg>
    ))
);
EyeClosedIconDuotone.displayName = "EyeClosedIconDuotone";
export { EyeClosedIconDuotone };
