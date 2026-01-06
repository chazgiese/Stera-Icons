import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareUpIconDuotone = memo(
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
          d="M5.75 10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V8.75h1.5V10l-.015.281A2.75 2.75 0 0 1 17 12.75h-4.25v2.574a3.8 3.8 0 0 0-1.5 0V12.75H7A2.75 2.75 0 0 1 4.25 10V8.75h1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M6.5 1.25A2.25 2.25 0 0 1 8.75 3.5v3l-.012.23A2.25 2.25 0 0 1 6.73 8.738l-.23.012h-3A2.25 2.25 0 0 1 1.25 6.5v-3A2.25 2.25 0 0 1 3.5 1.25zm-3 1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3l.077-.004A.75.75 0 0 0 7.25 6.5v-3a.75.75 0 0 0-.75-.75zM20.5 1.25a2.25 2.25 0 0 1 2.25 2.25v3l-.012.23a2.25 2.25 0 0 1-2.008 2.008l-.23.012h-3a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v3l.004.077a.75.75 0 0 0 .746.673h3l.077-.004a.75.75 0 0 0 .673-.746v-3a.75.75 0 0 0-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitSquareUpIconDuotone.displayName = "FlowSplitSquareUpIconDuotone";
export { FlowSplitSquareUpIconDuotone };
