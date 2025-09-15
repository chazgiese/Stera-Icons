import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrightnessMedium = memo(
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
          d="M12 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M6.345 16.246a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 1 1-1.414-1.414zM16.244 16.246a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M5.001 11.004a1 1 0 0 1 0 2h-1a1.001 1.001 0 0 1 0-2zM20.001 11.004a1 1 0 0 1 .001 2h-1a1 1 0 0 1-.001-2zM5.638 5.64a1 1 0 0 1 1.414 0l.707.707A1 1 0 0 1 6.345 7.76l-.707-.707a1 1 0 0 1 0-1.414M16.951 5.64a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 1 1-1.414-1.414zM12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
BrightnessMedium.displayName = "BrightnessMedium";
export { BrightnessMedium };
