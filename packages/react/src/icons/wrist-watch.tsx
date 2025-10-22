import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WristWatchIcon = memo(
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
          d="M12 8.75a.75.75 0 0 1 .75.75v2.19l1.28 1.28a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1-.22-.53V9.5a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14 .25A2.75 2.75 0 0 1 16.75 3v2.878a7.74 7.74 0 0 1 3 6.122 7.73 7.73 0 0 1-3 6.121V21A2.75 2.75 0 0 1 14 23.75h-4A2.75 2.75 0 0 1 7.25 21v-2.879a7.73 7.73 0 0 1-3-6.121 7.74 7.74 0 0 1 3-6.122V3A2.75 2.75 0 0 1 10 .25zm1.25 18.785a7.7 7.7 0 0 1-3.25.715 7.7 7.7 0 0 1-3.25-.715V21c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25zM12 5.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5m-2-4c-.69 0-1.25.56-1.25 1.25v1.964A7.7 7.7 0 0 1 12 4.25a7.7 7.7 0 0 1 3.25.714V3c0-.69-.56-1.25-1.25-1.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WristWatchIcon.displayName = "WristWatchIcon";
export { WristWatchIcon };
