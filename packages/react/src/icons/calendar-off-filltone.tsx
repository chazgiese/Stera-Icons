import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarOffIconFilltone = memo(
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
          <path d="M19.547 20.96a5 5 0 0 1-.777.495c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V10.4l.002-.4h6.084zM21.5 10.4v4.2c0 1.103.001 1.991-.058 2.709q-.008.1-.02.2L13.915 10h7.584z" />
        </g>
        <path
          fill="currentColor"
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414L8.586 10H2.5c.008-2.15.068-3.336.544-4.27q.211-.413.493-.778L2.293 3.707a1 1 0 0 1 0-1.414M16 1a1 1 0 0 1 1 1v1.088c.726.073 1.282.209 1.77.457a5 5 0 0 1 2.185 2.185c.476.934.536 2.12.544 4.27h-7.585L7.002 3.088C7.869 3 8.977 3 10.5 3h3c.552 0 1.049.003 1.5.007V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CalendarOffIconFilltone.displayName = "CalendarOffIconFilltone";
export { CalendarOffIconFilltone };
