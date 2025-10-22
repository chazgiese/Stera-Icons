import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaterfallChartXIconBold = memo(
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
        <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.75 7.602A2.25 2.25 0 0 1 8 9.852v5.5a2.25 2.25 0 0 1-2.25 2.25h-1.5A2.25 2.25 0 0 1 2 15.352v-5.5a2.25 2.25 0 0 1 2.25-2.25zm-1.5 2a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25zM19.75 3A2.25 2.25 0 0 1 22 5.25v7.5A2.25 2.25 0 0 1 19.75 15h-1.5A2.25 2.25 0 0 1 16 12.75v-7.5A2.25 2.25 0 0 1 18.25 3zm-1.5 2a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25zM12.75 6A2.25 2.25 0 0 1 15 8.25v3.5A2.25 2.25 0 0 1 12.75 14h-1.5A2.25 2.25 0 0 1 9 11.75v-3.5A2.25 2.25 0 0 1 11.25 6zm-1.5 2a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WaterfallChartXIconBold.displayName = "WaterfallChartXIconBold";
export { WaterfallChartXIconBold };
