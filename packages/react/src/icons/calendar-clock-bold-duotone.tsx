import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarClockIconBoldDuotone = memo(
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
          <path d="M7 5.089c-.396.053-.655.133-.862.238a3 3 0 0 0-1.31 1.31c-.135.264-.228.612-.277 1.217-.027.325-.038.699-.044 1.146h6.21a1 1 0 1 1 0 2H4.5v3.6c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217a3 3 0 0 0 1.31 1.31c.258.132.597.223 1.18.273.593.051 1.355.055 2.443.055a1 1 0 0 1 0 2c-1.06 0-1.917-.002-2.614-.061-.71-.062-1.336-.189-1.916-.484a5 5 0 0 1-2.185-2.185c-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V10.4l.001-.366L2.5 10l.002-.043c0-.901.005-1.647.056-2.266.06-.728.185-1.368.487-1.96A5 5 0 0 1 5.23 3.544c.54-.275 1.12-.404 1.77-.47zM17 3.075c.65.066 1.23.195 1.77.47a5 5 0 0 1 2.185 2.185c.49.962.534 2.11.543 3.645a1 1 0 0 1-2 .013c-.01-1.63-.087-2.283-.325-2.75a3 3 0 0 0-1.31-1.31c-.208-.106-.467-.186-.863-.24zM15 3.004v2Q14.59 5 14.1 5H9.9q-.49.001-.9.004v-2Q9.425 3 9.9 3h4.2q.475.001.9.004" />
        </g>
        <path
          fill="currentColor"
          d="M16 13a1 1 0 0 1 1 1v1.422L18 16a1 1 0 0 1-1 1.732l-1.5-.866A1 1 0 0 1 15 16v-2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 10a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M8 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1M16 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CalendarClockIconBoldDuotone.displayName = "CalendarClockIconBoldDuotone";
export { CalendarClockIconBoldDuotone };
