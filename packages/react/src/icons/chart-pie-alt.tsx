import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieAltIcon = memo(
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
          d="M12 1.25c4.48 0 8.32 2.74 9.935 6.635.526 1.268.815 2.659.815 4.115a10.72 10.72 0 0 1-3.148 7.602A10.72 10.72 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25m-.75 1.532a9.25 9.25 0 1 0 6.737 16.266L11.47 12.53a.75.75 0 0 1-.22-.53zm2.074 9.482 5.724 5.723A9.2 9.2 0 0 0 21.25 12c0-.99-.158-1.943-.445-2.836zm-.574-1.387 7.481-3.099A9.25 9.25 0 0 0 12.75 2.78z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartPieAltIcon.displayName = "ChartPieAltIcon";
export { ChartPieAltIcon };
