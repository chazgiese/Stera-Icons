import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiSlashFilled = memo(
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
          d="m14.201 17.736-.766.79a2 2 0 0 1-2.869 0l-2.012-2.072c-.377-.388-.382-1.014.053-1.335a5.7 5.7 0 0 1 2.024-.954zM3.293 3.293a1 1 0 0 1 1.414 0l14 14a1 1 0 1 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414M9.059 12.593c-.647.272-1.25.63-1.795 1.062-.442.349-1.087.354-1.48-.05l-.668-.686c-.377-.388-.38-1.01.03-1.363a10.7 10.7 0 0 1 1.688-1.188zM12.55 9.015a10.5 10.5 0 0 1 6.305 2.54c.41.354.408.976.03 1.364l-.667.687a1.03 1.03 0 0 1-.77.305zM12.001 4c3.95 0 7.557 1.515 10.3 4.01.4.365.4.986.022 1.374l-.668.686c-.392.404-1.039.4-1.463.03C17.986 8.167 15.126 7 12.001 7q-.702.001-1.386.08l-2.56-2.561A15.2 15.2 0 0 1 12 4M5.388 8.922q-.836.528-1.58 1.178c-.423.37-1.069.374-1.461-.03l-.668-.686c-.377-.388-.38-1.009.02-1.373a16 16 0 0 1 1.542-1.235z"
        />
      </svg>
    ))
);
WifiSlashFilled.displayName = "WifiSlashFilled";
export { WifiSlashFilled };
