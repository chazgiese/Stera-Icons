import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClockIconBold = memo(
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
          d="M12 4a9 9 0 0 1 9 9 8.97 8.97 0 0 1-2.745 6.467l1.526 1.908a1.001 1.001 0 0 1-1.562 1.25l-1.546-1.933A8.96 8.96 0 0 1 12 22a8.96 8.96 0 0 1-4.674-1.308l-1.545 1.933a1.001 1.001 0 0 1-1.562-1.25l1.525-1.908A8.97 8.97 0 0 1 3 13a9 9 0 0 1 9-9m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 1.5a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H8.5a1 1 0 0 1 0-2H11V8.5a1 1 0 0 1 1-1M5.251 1.333a2.5 2.5 0 0 1 3.415.915l.047.092A1 1 0 0 1 8.3 3.616L5.7 5.116a1 1 0 0 1-1.365-.367 2.5 2.5 0 0 1 .915-3.415m10.085.915a2.5 2.5 0 0 1 4.33 2.5l-.056.087a1 1 0 0 1-1.31.28l-2.599-1.5a1 1 0 0 1-.365-1.367"
        />
      </svg>
    ))
);
AlarmClockIconBold.displayName = "AlarmClockIconBold";
export { AlarmClockIconBold };
