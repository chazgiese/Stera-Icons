import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShareIcon = memo(
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
          d="M9 8.25a.75.75 0 0 1 0 1.5H7A2.25 2.25 0 0 0 4.75 12v7A2.25 2.25 0 0 0 7 21.25h10A2.25 2.25 0 0 0 19.25 19v-7A2.25 2.25 0 0 0 17 9.75h-2a.75.75 0 0 1 0-1.5h2A3.75 3.75 0 0 1 20.75 12v7A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19v-7A3.75 3.75 0 0 1 7 8.25z"
        />
        <path
          fill="currentColor"
          d="M11.47 1.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72V15a.75.75 0 0 1-1.5 0V3.81L8.53 6.53a.75.75 0 0 1-1.06-1.06z"
        />
      </svg>
    ))
);
ShareIcon.displayName = "ShareIcon";
export { ShareIcon };
