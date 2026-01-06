import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlarmClockMinusIconDuotone = memo(
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
          d="M12 4.25a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.083 19.444q.554.507 1.188.916L5.586 22.47a.75.75 0 0 1-1.172-.938zM19.586 21.531a.75.75 0 0 1-1.172.938l-1.687-2.109q.635-.408 1.189-.916zM15 12.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM15.552 2.375a2.25 2.25 0 0 1 3.897 2.25l-.042.065a.75.75 0 0 1-.982.21l-2.599-1.5a.75.75 0 0 1-.274-1.025M5.376 1.552a2.25 2.25 0 0 1 3.073.823l.035.07a.75.75 0 0 1-.31.954L5.577 4.9a.75.75 0 0 1-1.024-.274 2.25 2.25 0 0 1 .824-3.073"
        />
      </svg>
    ))
);
AlarmClockMinusIconDuotone.displayName = "AlarmClockMinusIconDuotone";
export { AlarmClockMinusIconDuotone };
