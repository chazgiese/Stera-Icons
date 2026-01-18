import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartCandleAltIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M4.75 20a.75.75 0 0 1-1.5 0v-1.25h1.5zM20.75 19a.75.75 0 0 1-1.5 0v-1.25h1.5zM12.75 18a.75.75 0 0 1-1.5 0v-3.25h1.5zM4 5.25a.75.75 0 0 1 .75.75v3.25h-1.5V6A.75.75 0 0 1 4 5.25M12 5.25a.75.75 0 0 1 .75.75v1.25h-1.5V6a.75.75 0 0 1 .75-.75M20 3.25a.75.75 0 0 1 .75.75v1.25h-1.5V4a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.75 9.25a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-5.5a.5.5 0 0 0-.5-.5zM20.75 5.25a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-8.5a.5.5 0 0 0-.5-.5zM12.75 7.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartCandleAltIconDuotone.displayName = "ChartCandleAltIconDuotone";
export { ChartCandleAltIconDuotone };
