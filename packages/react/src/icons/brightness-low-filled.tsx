import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrightnessLowIconFilled = memo(
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
          d="M12 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2M6.343 16.243a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414M16.242 16.242a1.001 1.001 0 1 1 1.415 1.416 1.001 1.001 0 0 1-1.415-1.416M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8M5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M19 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M6.343 6.343a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415M16.242 6.343a1.001 1.001 0 1 1 1.415 1.416 1.001 1.001 0 0 1-1.415-1.416M12 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
        />
      </svg>
    ))
);
BrightnessLowIconFilled.displayName = "BrightnessLowIconFilled";
export { BrightnessLowIconFilled };
