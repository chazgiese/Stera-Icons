import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClockIconFilled = memo(
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
          d="M12 4a9 9 0 0 1 9 9 8.97 8.97 0 0 1-2.745 6.468l1.526 1.907a1 1 0 0 1-1.562 1.25l-1.546-1.932A8.96 8.96 0 0 1 12 22a8.96 8.96 0 0 1-4.674-1.307l-1.545 1.932a1 1 0 0 1-1.562-1.25l1.525-1.907A9 9 0 0 1 12 4m0 3a1 1 0 0 0-1 1v4H8.5a1 1 0 0 0 0 2H12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M5.25 1.335a2.5 2.5 0 0 1 3.415.915l.047.092a1 1 0 0 1-.413 1.275L5.7 5.117a1 1 0 0 1-1.366-.367 2.5 2.5 0 0 1 .915-3.415M15.335 2.25a2.5 2.5 0 0 1 4.33 2.5l-.056.087a1 1 0 0 1-1.31.28l-2.598-1.5a1 1 0 0 1-.366-1.367"
        />
      </svg>
    ))
);
AlarmClockIconFilled.displayName = "AlarmClockIconFilled";
export { AlarmClockIconFilled };
