import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareUpIcon = memo(
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
          d="M12 22.75a3.75 3.75 0 0 0 .75-7.425V12.75H17A2.75 2.75 0 0 0 19.75 10V8.75h.75a2.25 2.25 0 0 0 2.25-2.25v-3a2.25 2.25 0 0 0-2.25-2.25h-3a2.25 2.25 0 0 0-2.25 2.25v3a2.25 2.25 0 0 0 2.25 2.25h.75V10c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V8.75h.75A2.25 2.25 0 0 0 8.75 6.5v-3A2.25 2.25 0 0 0 6.5 1.25h-3A2.25 2.25 0 0 0 1.25 3.5v3A2.25 2.25 0 0 0 3.5 8.75h.75V10A2.75 2.75 0 0 0 7 12.75h4.25v2.575A3.751 3.751 0 0 0 12 22.75M3.5 7.25a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75zm14 0a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75zm-5.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitSquareUpIcon.displayName = "FlowSplitSquareUpIcon";
export { FlowSplitSquareUpIcon };
