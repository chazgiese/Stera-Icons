import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowRightIconDuotone = memo(
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
          d="m20.94 5-.75.75H15c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h5.19l.75.75-.75.75H15A2.75 2.75 0 0 1 12.25 17v-4.25H8.675a3.8 3.8 0 0 0 0-1.5h3.575V7A2.75 2.75 0 0 1 15 4.25h5.19z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.47 15.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L20.94 19l-2.47-2.47a.75.75 0 0 1 0-1.06"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18.47 1.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L20.94 5l-2.47-2.47a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
FlowSplitArrowRightIconDuotone.displayName = "FlowSplitArrowRightIconDuotone";
export { FlowSplitArrowRightIconDuotone };
