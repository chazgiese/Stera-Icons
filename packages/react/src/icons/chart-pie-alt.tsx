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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.071 19.071A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m7.071 17.071L12 12m7.071 7.071A9.97 9.97 0 0 0 22 12a10 10 0 0 0-.759-3.828M12 2v10m0-10c4.167 0 7.739 2.549 9.241 6.172M12 12l9.241-3.828"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.071 19.071A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m7.071 17.071L12 12m7.071 7.071A9.97 9.97 0 0 0 22 12a10 10 0 0 0-.759-3.828M12 2v10m0-10c4.167 0 7.739 2.549 9.241 6.172M12 12l9.241-3.828"
        />
      </svg>
    ))
);
ChartPieAltIcon.displayName = "ChartPieAltIcon";
export { ChartPieAltIcon };
