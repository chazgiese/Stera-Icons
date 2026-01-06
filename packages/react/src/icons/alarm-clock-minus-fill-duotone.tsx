import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClockMinusIconFillDuotone = memo(
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
          d="M12 4a9 9 0 1 1 0 18 9 9 0 0 1 0-18m-3 8a1 1 0 1 0 0 2h6l.102-.005a1 1 0 0 0 0-1.99L15 12z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.745 19.468c.48.463 1.009.875 1.581 1.224l-1.545 1.933a1.001 1.001 0 0 1-1.562-1.25zM19.781 21.375a1.001 1.001 0 0 1-1.562 1.25l-1.546-1.933a9 9 0 0 0 1.582-1.224zM15.103 12.005a1 1 0 0 1 0 1.99L15 14H9a1 1 0 1 1 0-2h6zM5.251 1.335a2.5 2.5 0 0 1 3.415.915l.047.092A1 1 0 0 1 8.3 3.616L5.7 5.116a1 1 0 0 1-1.365-.366 2.5 2.5 0 0 1 .915-3.415M15.336 2.25a2.5 2.5 0 0 1 4.33 2.5l-.056.087a1 1 0 0 1-1.31.279l-2.599-1.5a1 1 0 0 1-.365-1.366"
        />
      </svg>
    ))
);
AlarmClockMinusIconFillDuotone.displayName = "AlarmClockMinusIconFillDuotone";
export { AlarmClockMinusIconFillDuotone };
