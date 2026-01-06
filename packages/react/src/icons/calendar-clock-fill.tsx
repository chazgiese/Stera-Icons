import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarClockIconFill = memo(
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
          d="M16 1a1 1 0 0 1 1 1v1.078c.57.058 1.085.161 1.566.371q.104.045.204.096a5 5 0 0 1 2.18 2.175l.005.01q.046.091.087.186c.239.54.347 1.122.4 1.775.052.629.056 1.388.057 2.309l.001.4v.51a7.47 7.47 0 0 0-5-1.91 7.46 7.46 0 0 0-3.74 1H4.503l-.002.4v4.2c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277.611.05 1.394.05 2.512.05A7.5 7.5 0 0 0 11.402 22H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V10.4l.002-.4v-.272c.003-.8.01-1.471.056-2.037.053-.647.158-1.224.392-1.76q.045-.103.095-.2A5 5 0 0 1 4.72 3.843a5 5 0 0 1 .713-.395c.482-.21.997-.313 1.567-.37V2a1 1 0 0 1 2 0v1.004Q9.425 3 9.9 3h4.2q.475.001.9.004V2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.5 11a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 2a1 1 0 0 0-1 1v2.5a1 1 0 0 0 .5.866l1.5.866a1 1 0 0 0 1-1.732l-1-.578V14a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CalendarClockIconFill.displayName = "CalendarClockIconFill";
export { CalendarClockIconFill };
