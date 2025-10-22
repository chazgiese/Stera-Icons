import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClockIcon = memo(
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
          d="M12 4.25a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6.415 19.031a.75.75 0 0 1 1.17.938l-2 2.5a.75.75 0 0 1-1.171-.938zM16.53 18.914a.75.75 0 0 1 1.056.117l2 2.5a.75.75 0 0 1-1.172.938l-2-2.5a.75.75 0 0 1 .117-1.055M12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H8.5a.75.75 0 0 1 0-1.5h2.75V8a.75.75 0 0 1 .75-.75M15.551 2.375a2.25 2.25 0 0 1 3.898 2.25l-.042.066a.75.75 0 0 1-.983.209l-2.598-1.5a.75.75 0 0 1-.275-1.025M5.376 1.552a2.25 2.25 0 0 1 3.073.823l.035.07a.75.75 0 0 1-.31.955L5.576 4.9a.75.75 0 0 1-1.025-.275 2.25 2.25 0 0 1 .825-3.073"
        />
      </svg>
    ))
);
AlarmClockIcon.displayName = "AlarmClockIcon";
export { AlarmClockIcon };
