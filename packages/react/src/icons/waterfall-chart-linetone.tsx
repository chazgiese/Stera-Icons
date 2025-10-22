import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaterfallChartIconLinetone = memo(
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
          d="M12.75 8A2.25 2.25 0 0 1 15 10.25v3.5A2.25 2.25 0 0 1 12.75 16h-1.5A2.25 2.25 0 0 1 9 13.75v-3.5A2.25 2.25 0 0 1 11.25 8zm-1.5 2a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.75 11A2.25 2.25 0 0 1 7 13.25v5.5A2.25 2.25 0 0 1 4.75 21h-1.5A2.25 2.25 0 0 1 1 18.75v-5.5A2.25 2.25 0 0 1 3.25 11zm-1.5 2a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25zM20.75 3A2.25 2.25 0 0 1 23 5.25v9.5A2.25 2.25 0 0 1 20.75 17h-1.5A2.25 2.25 0 0 1 17 14.75v-9.5A2.25 2.25 0 0 1 19.25 3zm-1.5 2a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WaterfallChartIconLinetone.displayName = "WaterfallChartIconLinetone";
export { WaterfallChartIconLinetone };
