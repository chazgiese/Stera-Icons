import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SettingsIconFilltone = memo(
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
          d="M14.44 2.457a2 2 0 0 1 2.438-.342l1.245.718a2 2 0 0 1 .923 2.283l-.112.39a3 3 0 0 0 2.156 3.736l.395.1A2 2 0 0 1 23 11.28v1.438c0 .918-.625 1.718-1.515 1.94l-.394.1a3 3 0 0 0-2.157 3.735l.112.391a2 2 0 0 1-.923 2.282l-1.245.72c-.795.458-1.8.317-2.438-.343l-.283-.292a3 3 0 0 0-4.314 0l-.282.292c-.638.66-1.644.801-2.439.342l-1.245-.718a2 2 0 0 1-.923-2.283l.112-.39a3 3 0 0 0-2.157-3.737l-.394-.098A2 2 0 0 1 1 12.72v-1.44a2 2 0 0 1 1.515-1.939l.395-.1a3 3 0 0 0 2.156-3.735l-.11-.39a2 2 0 0 1 .92-2.282l1.246-.72a2 2 0 0 1 2.439.343l.282.292a3 3 0 0 0 4.314 0z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
        />
      </svg>
    ))
);
SettingsIconFilltone.displayName = "SettingsIconFilltone";
export { SettingsIconFilltone };
