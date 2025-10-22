import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsUpDownIconFilled = memo(
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
          d="M17 3a1 1 0 0 1 1 1v13h3a1 1 0 0 1 .707 1.707l-4 4a1 1 0 0 1-.546.278q-.017.004-.035.006l-.053.005q-.026.002-.053.003L17 23l-.02-.001q-.025 0-.048-.003a1 1 0 0 1-.107-.013l-.033-.006q-.025-.005-.05-.012a1 1 0 0 1-.449-.258l-4-4A1 1 0 0 1 13 17h3V4a1 1 0 0 1 1-1M7.103 2.005q.03.003.061.01.017.002.034.005l.032.007q.033.007.065.017c.078.024.151.06.22.1q.104.062.192.149l4 4A1 1 0 0 1 11 8H8v13a1 1 0 1 1-2 0V8H3a1 1 0 0 1-.707-1.707l4-4 .073-.066.006-.005q.06-.05.128-.088l.012-.006a1 1 0 0 1 .146-.067l.009-.004A1 1 0 0 1 7 2z"
        />
      </svg>
    ))
);
ArrowsUpDownIconFilled.displayName = "ArrowsUpDownIconFilled";
export { ArrowsUpDownIconFilled };
