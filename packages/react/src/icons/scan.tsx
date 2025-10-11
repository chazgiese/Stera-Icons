import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanIcon = memo(
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
          d="M20 15.25a.75.75 0 0 1 .75.75v1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17v-1a.75.75 0 0 1 1.5 0v1A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17v-1a.75.75 0 0 1 .75-.75M23 11.25a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1 0-1.5zM17 3.25A3.75 3.75 0 0 1 20.75 7v1a.75.75 0 0 1-1.5 0V7A2.25 2.25 0 0 0 17 4.75H7A2.25 2.25 0 0 0 4.75 7v1a.75.75 0 0 1-1.5 0V7A3.75 3.75 0 0 1 7 3.25z"
        />
      </svg>
    ))
);
ScanIcon.displayName = "ScanIcon";
export { ScanIcon };
