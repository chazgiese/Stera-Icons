import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareLeftIcon = memo(
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
          d="M22.75 12a3.75 3.75 0 0 1-7.425.75H12.75V17A2.75 2.75 0 0 1 10 19.75H8.75v.75a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 0 1 2.25 2.25v.75H10c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H8.75v.75A2.25 2.25 0 0 1 6.5 8.75h-3A2.25 2.25 0 0 1 1.25 6.5v-3A2.25 2.25 0 0 1 3.5 1.25h3A2.25 2.25 0 0 1 8.75 3.5v.75H10A2.75 2.75 0 0 1 12.75 7v4.25h2.575a3.751 3.751 0 0 1 7.425.75M7.25 3.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75zm0 14a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75zm14-5.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitSquareLeftIcon.displayName = "FlowSplitSquareLeftIcon";
export { FlowSplitSquareLeftIcon };
