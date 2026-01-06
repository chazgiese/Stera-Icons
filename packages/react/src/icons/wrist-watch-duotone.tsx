import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WristWatchIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M16.75 21A2.75 2.75 0 0 1 14 23.75h-4A2.75 2.75 0 0 1 7.25 21v-2.879c.461.359.964.666 1.5.914V21c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-1.965a7.8 7.8 0 0 0 1.5-.914zM14 .25A2.75 2.75 0 0 1 16.75 3v2.878a7.8 7.8 0 0 0-1.5-.914V3c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.964a7.8 7.8 0 0 0-1.5.914V3A2.75 2.75 0 0 1 10 .25z" />
        </g>
        <path
          fill="currentColor"
          d="M12 8.75a.75.75 0 0 1 .75.75v2.19l1.28 1.28a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1-.22-.53V9.5a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4.25a7.75 7.75 0 1 1 0 15.5 7.75 7.75 0 0 1 0-15.5m0 1.5a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WristWatchIconDuotone.displayName = "WristWatchIconDuotone";
export { WristWatchIconDuotone };
