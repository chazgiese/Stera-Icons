import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ForkKnifeIcon = memo(
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
          d="M10 2.25a.75.75 0 0 1 .75.75v6l-.001.01a1 1 0 0 1-.013.127q-.002.013-.006.025a1 1 0 0 1-.036.118l-.005.015-1.176 2.746c-.174.404-.263.84-.263 1.28V19.5a2.25 2.25 0 0 1-4.5 0V13.32c0-.44-.09-.876-.263-1.28L3.311 9.296l-.001-.001-.005-.015a1 1 0 0 1-.036-.118q-.004-.012-.006-.025a1 1 0 0 1-.011-.084l-.002-.028V3a.75.75 0 0 1 1.5 0v5.25h1.5V3.5a.75.75 0 0 1 1.5 0v4.75h1.5V3a.75.75 0 0 1 .75-.75m-4.134 9.2c.253.591.384 1.228.384 1.871V19.5a.75.75 0 0 0 1.5 0V13.32c0-.643.13-1.28.384-1.871l.728-1.7H5.138zM19.828 2.27a.752.752 0 0 1 .922.73v16.5a2.25 2.25 0 0 1-4.5 0v-3.75H14a.75.75 0 0 1-.75-.75c-.008-4.296.351-7.198 1.38-9.17 1.075-2.06 2.819-3.002 5.198-3.56M17.75 19.5a.75.75 0 0 0 1.5 0v-3.75h-1.5zm1.5-15.519c-1.604.505-2.615 1.25-3.29 2.543-.792 1.519-1.171 3.88-1.207 7.726h4.497z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ForkKnifeIcon.displayName = "ForkKnifeIcon";
export { ForkKnifeIcon };
