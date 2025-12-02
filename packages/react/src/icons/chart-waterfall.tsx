import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartWaterfallIcon = memo(
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
          d="M4.75 11.25a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM20.75 3.25a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v9.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-9.5a.5.5 0 0 0-.5-.5zM12.75 8.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartWaterfallIcon.displayName = "ChartWaterfallIcon";
export { ChartWaterfallIcon };
