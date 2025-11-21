import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClockMinusIconFilled = memo(
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
          d="M12 4a9 9 0 0 1 9 9 8.97 8.97 0 0 1-2.745 6.467l1.526 1.908a1.001 1.001 0 0 1-1.562 1.25l-1.546-1.933A8.96 8.96 0 0 1 12 22a8.96 8.96 0 0 1-4.674-1.308l-1.545 1.933a1 1 0 0 1-1.562-1.25l1.525-1.908A9 9 0 0 1 12 4m-3 8a1 1 0 0 0 0 2h6l.102-.005a1 1 0 0 0 0-1.99L15 12z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M5.25 1.335a2.5 2.5 0 0 1 3.415.915l.047.091a1 1 0 0 1-.413 1.275L5.7 5.116a1 1 0 0 1-1.366-.366 2.5 2.5 0 0 1 .915-3.415M15.335 2.25a2.5 2.5 0 0 1 4.33 2.5l-.056.087a1 1 0 0 1-1.31.279l-2.598-1.5a1 1 0 0 1-.366-1.366"
        />
      </svg>
    ))
);
AlarmClockMinusIconFilled.displayName = "AlarmClockMinusIconFilled";
export { AlarmClockMinusIconFilled };
