import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlashlightIconLinetone = memo(
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
          d="M15 1a3 3 0 0 1 3 3v2.343a5 5 0 0 1-1.465 3.536l-.156.156a3 3 0 0 0-.879 2.122V20a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-7.843c0-.795-.316-1.56-.879-2.122l-.156-.156A5 5 0 0 1 6 6.343V4a3 3 0 0 1 3-3zM9 3a1 1 0 0 0-1 1v2.343c0 .795.316 1.56.879 2.122l.156.156a5 5 0 0 1 1.465 3.536V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7.843c0-1.326.527-2.598 1.465-3.536l.156-.156A3 3 0 0 0 16 6.343V4a1 1 0 0 0-1-1z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M16 5.75H8v-1.5h8z"
        />
      </svg>
    ))
);
FlashlightIconLinetone.displayName = "FlashlightIconLinetone";
export { FlashlightIconLinetone };
