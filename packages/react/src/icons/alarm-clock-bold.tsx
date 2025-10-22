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
          d="M6.22 18.875a1 1 0 0 1 1.561 1.25l-2 2.5a1 1 0 0 1-1.563-1.25zM16.376 18.719a1 1 0 0 1 1.405.156l2 2.5a1 1 0 0 1-1.562 1.25l-2-2.5a1 1 0 0 1 .157-1.406M12 7.5a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H8.5a1 1 0 0 1 0-2H11V8.5a1 1 0 0 1 1-1M5.25 1.335a2.5 2.5 0 0 1 3.416.915l.047.092A1 1 0 0 1 8.3 3.616l-2.6 1.5a1 1 0 0 1-1.364-.366 2.5 2.5 0 0 1 .915-3.415M15.336 2.25a2.5 2.5 0 0 1 4.33 2.5l-.056.087a1 1 0 0 1-1.31.28l-2.6-1.5a1 1 0 0 1-.364-1.367"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AlarmClockIconBold.displayName = "AlarmClockIconBold";
export { AlarmClockIconBold };
