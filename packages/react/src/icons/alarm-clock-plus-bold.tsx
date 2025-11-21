import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClockPlusIconBold = memo(
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
          d="M12.004 8.505a1 1 0 0 1 1 1V12H15.5a1 1 0 0 1 0 2h-2.496v2.505a1 1 0 1 1-2 0V14H8.5a1 1 0 1 1 0-2h2.504V9.505a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4a9 9 0 0 1 9 9c0 2.539-1.054 4.83-2.745 6.467l1.526 1.907a1.001 1.001 0 0 1-1.562 1.25l-1.546-1.933A8.96 8.96 0 0 1 12 22a8.96 8.96 0 0 1-4.674-1.309l-1.545 1.933a1.001 1.001 0 0 1-1.562-1.25l1.525-1.907A8.97 8.97 0 0 1 3 13a9 9 0 0 1 9-9m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M5.251 1.334a2.5 2.5 0 0 1 3.415.915l.047.092A1 1 0 0 1 8.3 3.615L5.7 5.115a1 1 0 0 1-1.365-.366 2.5 2.5 0 0 1 .915-3.415M15.336 2.249a2.5 2.5 0 0 1 3.415-.915 2.5 2.5 0 0 1 .915 3.415l-.056.087a1 1 0 0 1-1.31.28l-2.599-1.5a1 1 0 0 1-.365-1.367"
        />
      </svg>
    ))
);
AlarmClockPlusIconBold.displayName = "AlarmClockPlusIconBold";
export { AlarmClockPlusIconBold };
