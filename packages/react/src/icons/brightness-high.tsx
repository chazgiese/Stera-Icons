import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrightnessHighIcon = memo(
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
          d="M12 18.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M6.517 16.42a.75.75 0 0 1 1.06 1.061l-2.12 2.121a.75.75 0 1 1-1.061-1.06zM16.416 16.42a.75.75 0 0 1 1.06 0l2.122 2.122a.75.75 0 0 1-1.06 1.06l-2.122-2.12a.75.75 0 0 1 0-1.061"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M5 11.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM4.396 4.4a.75.75 0 0 1 1.06 0l2.121 2.121a.75.75 0 0 1-1.06 1.061L4.396 5.461a.75.75 0 0 1 0-1.06M18.537 4.4a.75.75 0 0 1 1.06 1.06l-2.12 2.122a.75.75 0 1 1-1.061-1.06zM12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
BrightnessHighIcon.displayName = "BrightnessHighIcon";
export { BrightnessHighIcon };
