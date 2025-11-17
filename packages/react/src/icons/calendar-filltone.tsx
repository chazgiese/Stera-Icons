import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarIconFilltone = memo(
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
          d="M7.5 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.5 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.5 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M13.5 3c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185c.476.934.536 2.12.544 4.27H2.501c.008-2.15.068-3.336.544-4.27a5 5 0 0 1 2.184-2.185C6.3 3 7.7 3 10.5 3z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path
            fillRule="evenodd"
            d="M2.5 10h19q0-.551-.004-1h.004v5.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V9h.004q-.003.449-.004 1m5 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-4.5-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
            clipRule="evenodd"
          />
          <path d="M8 1a1 1 0 0 1 1 1v1.007c-.795.007-1.447.025-2 .08V2a1 1 0 0 1 1-1M16 1a1 1 0 0 1 1 1v1.088c-.553-.056-1.205-.074-2-.081V2a1 1 0 0 1 1-1" />
        </g>
      </svg>
    ))
);
CalendarIconFilltone.displayName = "CalendarIconFilltone";
export { CalendarIconFilltone };
