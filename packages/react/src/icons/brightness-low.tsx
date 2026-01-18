import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrightnessLowIcon = memo(
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
          d="M12 18.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5.99 16.597a1.001 1.001 0 1 1 1.414 1.416 1.001 1.001 0 0 1-1.415-1.416M16.597 16.596a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M4.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M19.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5.99 5.99a1.001 1.001 0 1 1 1.414 1.415A1.001 1.001 0 0 1 5.99 5.99M16.597 5.99a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.415M12 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
        />
      </svg>
    ))
);
BrightnessLowIcon.displayName = "BrightnessLowIcon";
export { BrightnessLowIcon };
