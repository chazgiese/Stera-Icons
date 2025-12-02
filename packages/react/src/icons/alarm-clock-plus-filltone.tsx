import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClockPlusIconFilltone = memo(
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
          d="M5.745 19.467c.48.464 1.009.876 1.581 1.225l-1.545 1.933a1.001 1.001 0 0 1-1.562-1.25zM19.781 21.375a1 1 0 0 1-1.562 1.25l-1.546-1.933a9 9 0 0 0 1.582-1.225zM5.251 1.335a2.5 2.5 0 0 1 3.415.915l.047.091A1 1 0 0 1 8.3 3.616L5.7 5.116a1 1 0 0 1-1.365-.366 2.5 2.5 0 0 1 .915-3.415M15.336 2.25a2.5 2.5 0 0 1 4.33 2.5l-.056.087a1 1 0 0 1-1.31.279l-2.599-1.5a1 1 0 0 1-.365-1.366M12.004 8.505a1 1 0 0 1 1 1V12H15.5a1 1 0 1 1 0 2h-2.496v2.505a1 1 0 1 1-2 0V14H8.5a1 1 0 1 1 0-2h2.504V9.505a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4a9 9 0 1 1 0 18 9 9 0 0 1 0-18m.004 4.505a1 1 0 0 0-1 1V12H8.5a1 1 0 1 0 0 2h2.504v2.505a1 1 0 1 0 2 0V14H15.5a1 1 0 1 0 0-2h-2.496V9.505a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
AlarmClockPlusIconFilltone.displayName = "AlarmClockPlusIconFilltone";
export { AlarmClockPlusIconFilltone };
