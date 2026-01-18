import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartCandleAltIcon = memo(
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
          d="M4 5.25a.75.75 0 0 1 .75.75v3.25a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2V20a.75.75 0 0 1-1.5 0v-1.25a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2V6A.75.75 0 0 1 4 5.25m-.75 5.5a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM20 3.25a.75.75 0 0 1 .75.75v1.25a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2V19a.75.75 0 0 1-1.5 0v-1.25a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2V4a.75.75 0 0 1 .75-.75m-.75 3.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-8.5a.5.5 0 0 0-.5-.5zM12 5.25a.75.75 0 0 1 .75.75v1.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2V18a.75.75 0 0 1-1.5 0v-3.25a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2V6a.75.75 0 0 1 .75-.75m-.75 3.5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartCandleAltIcon.displayName = "ChartCandleAltIcon";
export { ChartCandleAltIcon };
