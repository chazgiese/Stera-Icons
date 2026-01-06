import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarClockIconDuotone = memo(
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
          <path d="M7.25 4.81c-.572.053-.935.146-1.226.294a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.252.69-.302 1.31-.032.392-.042.852-.047 1.416h6.462a.75.75 0 0 1 0 1.5H4.25v3.85c0 1.132 0 1.937.052 2.566.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.298.151.673.247 1.27.298.608.053 1.382.056 2.466.056a.75.75 0 1 1 0 1.5c-1.063 0-1.908-.002-2.593-.06-.694-.06-1.284-.183-1.823-.458a4.75 4.75 0 0 1-2.076-2.076c-.281-.55-.403-1.155-.461-1.868-.058-.704-.057-1.58-.057-2.688v-4.2l.001-.368L2.75 10l.002-.04c0-.903.005-1.64.055-2.248.058-.713.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.155-.403 1.868-.461l.038-.003zM16.788 3.307c.713.058 1.317.18 1.868.46a4.75 4.75 0 0 1 2.076 2.077c.459.9.506 1.985.516 3.532a.75.75 0 0 1-1.5.01c-.01-1.619-.083-2.332-.353-2.862a3.25 3.25 0 0 0-1.42-1.42c-.29-.148-.653-.241-1.225-.293V3.304q.019 0 .038.003M15.25 3.255v1.5q-.511-.005-1.15-.005H9.9q-.639 0-1.15.005v-1.5q.53-.005 1.15-.005h4.2q.621 0 1.15.005" />
        </g>
        <path
          fill="currentColor"
          d="M16 13.25a.75.75 0 0 1 .75.75v1.566l1.125.65a.75.75 0 0 1-.75 1.3l-1.5-.867A.75.75 0 0 1 15.25 16v-2a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 10.25a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5m0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M8 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25M16 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
CalendarClockIconDuotone.displayName = "CalendarClockIconDuotone";
export { CalendarClockIconDuotone };
