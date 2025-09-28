import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClock = memo(
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
          d="M12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H8.5a.75.75 0 0 1 0-1.5h2.75V8a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4.25a8.75 8.75 0 0 1 5.916 15.194l1.67 2.087a.75.75 0 0 1-1.172.938l-1.687-2.109A8.7 8.7 0 0 1 12 21.75a8.7 8.7 0 0 1-4.729-1.39L5.586 22.47a.75.75 0 0 1-1.172-.938l1.669-2.086A8.75 8.75 0 0 1 12 4.25m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M15.552 2.375a2.25 2.25 0 0 1 3.897 2.25l-.042.065a.75.75 0 0 1-.983.21l-2.598-1.5a.75.75 0 0 1-.274-1.025M5.375 1.552a2.25 2.25 0 0 1 3.074.823l.035.07a.75.75 0 0 1-.31.954L5.576 4.9a.75.75 0 0 1-1.024-.274 2.25 2.25 0 0 1 .823-3.073"
        />
      </svg>
    ))
);
AlarmClock.displayName = "AlarmClock";
export { AlarmClock };
