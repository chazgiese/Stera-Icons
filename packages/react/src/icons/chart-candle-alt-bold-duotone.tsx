import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartCandleAltIconBoldDuotone = memo(
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
          <path d="M5 20a1 1 0 1 1-2 0v-1.016q.123.016.25.016h1.5q.127 0 .25-.016zM21 19a1 1 0 1 1-2 0v-1.016q.123.016.25.016h1.5q.127 0 .25-.016zM13 18a1 1 0 1 1-2 0v-3.016q.123.016.25.016h1.5q.127-.001.25-.016zM4 5a1 1 0 0 1 1 1v3.015A2 2 0 0 0 4.75 9h-1.5q-.127 0-.25.015V6a1 1 0 0 1 1-1M12 5a1 1 0 0 1 1 1v1.015A2 2 0 0 0 12.75 7h-1.5q-.127 0-.25.015V6a1 1 0 0 1 1-1M20 3a1 1 0 0 1 1 1v1.015A2 2 0 0 0 20.75 5h-1.5q-.127 0-.25.015V4a1 1 0 0 1 1-1" />
        </g>
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 7.25c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25zM10 9.25c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25zM2 11.25c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v5.5C6 17.44 5.44 18 4.75 18h-1.5C2.56 18 2 17.44 2 16.75z"
        />
      </svg>
    ))
);
ChartCandleAltIconBoldDuotone.displayName = "ChartCandleAltIconBoldDuotone";
export { ChartCandleAltIconBoldDuotone };
