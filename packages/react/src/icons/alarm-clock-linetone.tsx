import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClockIconLinetone = memo(
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
          d="M12 4a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M5.745 19.468c.479.464 1.008.876 1.58 1.225l-1.544 1.932a1.001 1.001 0 0 1-1.563-1.25zM19.78 21.375a1 1 0 0 1-1.562 1.25l-1.546-1.932a9 9 0 0 0 1.582-1.225zM12 7.5a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H8.5a1 1 0 0 1 0-2H11V8.5a1 1 0 0 1 1-1M5.25 1.335a2.5 2.5 0 0 1 3.416.915l.047.092a1 1 0 0 1-.414 1.274l-2.598 1.5a1 1 0 0 1-1.365-.366 2.5 2.5 0 0 1 .915-3.415M15.336 2.25a2.5 2.5 0 0 1 4.33 2.5l-.056.087a1 1 0 0 1-1.31.28l-2.6-1.5a1 1 0 0 1-.364-1.367"
        />
      </svg>
    ))
);
AlarmClockIconLinetone.displayName = "AlarmClockIconLinetone";
export { AlarmClockIconLinetone };
