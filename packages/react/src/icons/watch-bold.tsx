import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WatchIconBold = memo(
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
          d="M12 8.5a1 1 0 0 1 1 1v2.086l1.207 1.207a1 1 0 1 1-1.414 1.414l-1.5-1.5A1 1 0 0 1 11 12V9.5a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14 0a3 3 0 0 1 3 3v2.757A7.98 7.98 0 0 1 20 12a7.98 7.98 0 0 1-3 6.242V21a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2.758A7.98 7.98 0 0 1 4 12a7.98 7.98 0 0 1 3-6.243V3a3 3 0 0 1 3-3zm1 19.416A8 8 0 0 1 12 20a8 8 0 0 1-3-.584V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-2-4a1 1 0 0 0-1 1v1.583A8 8 0 0 1 12 4c1.061 0 2.073.208 3 .583V3a1 1 0 0 0-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WatchIconBold.displayName = "WatchIconBold";
export { WatchIconBold };
