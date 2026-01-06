import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarXIconFillDuotone = memo(
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
          d="M21.5 10.4v4.2c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V10.4l.002-.4h18.996zm-6.793 2.643a1 1 0 0 0-1.414 0L12 14.336l-1.293-1.293a1 1 0 1 0-1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414L12 17.164l1.293 1.293a1 1 0 1 0 1.414-1.414l-1.293-1.293 1.293-1.293a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.293 13.043a1 1 0 1 1 1.414 1.414l-1.293 1.293 1.293 1.293a1 1 0 1 1-1.414 1.414L12 17.164l-1.293 1.293a1 1 0 1 1-1.414-1.414l1.293-1.293-1.293-1.293a1 1 0 1 1 1.414-1.414L12 14.336zM16 1a1 1 0 0 1 1 1v1.088c.726.073 1.282.209 1.77.457a5 5 0 0 1 2.185 2.185c.476.934.536 2.12.544 4.27H2.501c.008-2.15.068-3.336.544-4.27a5 5 0 0 1 2.184-2.185C5.717 3.297 6.274 3.16 7 3.088V2a1 1 0 0 1 2 0v1.007C9.451 3.003 9.948 3 10.5 3h3c.552 0 1.049.003 1.5.007V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CalendarXIconFillDuotone.displayName = "CalendarXIconFillDuotone";
export { CalendarXIconFillDuotone };
