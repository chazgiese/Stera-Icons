import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareDownIconDuotone = memo(
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
          d="M12.75 11.25H17A2.75 2.75 0 0 1 19.75 14v1.25h-1.5V14c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v1.25h-1.5V14A2.75 2.75 0 0 1 7 11.25h4.25V8.675a3.8 3.8 0 0 0 1.5 0z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.73 15.262A2.25 2.25 0 0 1 8.75 17.5v3l-.012.23A2.25 2.25 0 0 1 6.5 22.75h-3a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25h3zM3.5 16.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3l.077-.004a.75.75 0 0 0 .673-.746v-3a.75.75 0 0 0-.75-.75zM20.73 15.262a2.25 2.25 0 0 1 2.02 2.238v3l-.012.23a2.25 2.25 0 0 1-2.238 2.02h-3a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25h3zM17.5 16.75a.75.75 0 0 0-.75.75v3l.004.077a.75.75 0 0 0 .746.673h3l.077-.004a.75.75 0 0 0 .673-.746v-3a.75.75 0 0 0-.75-.75zM12 1.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitSquareDownIconDuotone.displayName = "FlowSplitSquareDownIconDuotone";
export { FlowSplitSquareDownIconDuotone };
