import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiSlashIconFill = memo(
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
          d="m14.549 17.377-1.115 1.149a2 2 0 0 1-2.868 0l-2.013-2.072c-.377-.388-.382-1.014.054-1.335a5.7 5.7 0 0 1 2.618-1.066zM3.293 3.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414M9.571 12.4a7.7 7.7 0 0 0-2.308 1.255c-.442.349-1.087.354-1.48-.05l-.668-.686c-.377-.388-.38-1.01.03-1.363a10.7 10.7 0 0 1 2.148-1.435zM12 9c2.608 0 4.999.96 6.855 2.556.41.353.407.975.03 1.363l-.668.687c-.393.403-1.038.398-1.48.049a8 8 0 0 0-.823-.569l-4.083-4.083q.084-.002.17-.003M5.827 8.655c-.719.415-1.396.899-2.02 1.445-.423.37-1.069.374-1.461-.03l-.668-.686c-.377-.388-.38-1.009.02-1.373a15.7 15.7 0 0 1 1.964-1.52zM12 4c3.95 0 7.557 1.515 10.3 4.01.401.365.4.986.022 1.374l-.668.686c-.392.404-1.039.4-1.462.03C17.985 8.167 15.125 7 12 7c-.683 0-1.352.059-2.006.166L7.506 4.678A15.2 15.2 0 0 1 12 4"
        />
      </svg>
    ))
);
WifiSlashIconFill.displayName = "WifiSlashIconFill";
export { WifiSlashIconFill };
