import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClockIconFilltone = memo(
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
          d="M12 4a9 9 0 0 1 9 9 8.97 8.97 0 0 1-2.636 6.364l-.11.104q-.349.338-.735.637l-.035.028a9 9 0 0 1-.39.286l-.421.273A8.96 8.96 0 0 1 12 22a8.96 8.96 0 0 1-6.255-2.532A9 9 0 0 1 12 4m0 3.5a1 1 0 0 0-1 1V12H8.5a1 1 0 0 0 0 2H12a1 1 0 0 0 1-1V8.5a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.745 19.467c.479.464 1.008.876 1.58 1.225l-1.544 1.933a1.001 1.001 0 0 1-1.563-1.25zM19.78 21.375a1.001 1.001 0 0 1-1.562 1.25l-1.546-1.933a9 9 0 0 0 1.582-1.225zM12 7.5a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H8.5a1 1 0 0 1 0-2H11V8.5a1 1 0 0 1 1-1M5.25 1.335a2.5 2.5 0 0 1 3.416.915l.046.091A1 1 0 0 1 8.3 3.616l-2.598 1.5a1 1 0 0 1-1.365-.366 2.5 2.5 0 0 1 .915-3.415M15.336 2.25a2.5 2.5 0 0 1 4.33 2.5l-.056.087a1 1 0 0 1-1.31.279l-2.6-1.5a1 1 0 0 1-.364-1.366"
        />
      </svg>
    ))
);
AlarmClockIconFilltone.displayName = "AlarmClockIconFilltone";
export { AlarmClockIconFilltone };
