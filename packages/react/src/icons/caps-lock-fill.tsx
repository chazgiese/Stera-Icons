import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CapsLockIconFill = memo(
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
          d="M15 17.25c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 15 22.75H9A1.75 1.75 0 0 1 7.25 21v-2c0-.966.783-1.75 1.75-1.75zM10.586 1.854a2 2 0 0 1 2.828 0l8.262 8.263c.788.787.23 2.133-.883 2.133H16.75V14A1.75 1.75 0 0 1 15 15.75H9A1.75 1.75 0 0 1 7.25 14v-1.75H3.207c-1.113 0-1.671-1.346-.884-2.133z"
        />
      </svg>
    ))
);
CapsLockIconFill.displayName = "CapsLockIconFill";
export { CapsLockIconFill };
