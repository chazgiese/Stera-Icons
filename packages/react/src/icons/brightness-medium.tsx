import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrightnessMediumIcon = memo(
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
          d="M12 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M6.521 16.423a.75.75 0 1 1 1.061 1.06l-.707.707a.75.75 0 1 1-1.06-1.06zM16.42 16.423a.75.75 0 0 1 1.061 0l.707.707a.75.75 0 1 1-1.06 1.06l-.707-.707a.75.75 0 0 1 0-1.06"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M5.001 11.254a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zM20.001 11.254a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zM5.814 5.816a.75.75 0 0 1 1.061 0l.707.707a.75.75 0 0 1-1.06 1.061l-.708-.707a.75.75 0 0 1 0-1.06M17.128 5.816a.75.75 0 0 1 1.06 1.061l-.707.707a.75.75 0 1 1-1.06-1.06zM12 3.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
BrightnessMediumIcon.displayName = "BrightnessMediumIcon";
export { BrightnessMediumIcon };
