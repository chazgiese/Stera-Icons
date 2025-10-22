import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowDownIconBold = memo(
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
          d="M12 1a4 4 0 0 1 1 7.874V12h4a3 3 0 0 1 3 3v4.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.192.148 1 1 0 0 1-.218.1q-.033.01-.066.017l-.033.008-.026.003Q19.088 23 19 23q-.088-.001-.173-.017l-.026-.003-.048-.012-.047-.012a1 1 0 0 1-.413-.249l-3-3a1 1 0 1 1 1.414-1.414L18 19.586V15a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-.192.148 1 1 0 0 1-.218.1q-.033.01-.066.017l-.033.008-.026.003Q5.088 23 5 23q-.089-.001-.173-.017l-.026-.003-.048-.012-.047-.012a1 1 0 0 1-.413-.249l-3-3a1 1 0 1 1 1.414-1.414L4 19.586V15a3 3 0 0 1 3-3h4V8.874A4.002 4.002 0 0 1 12 1m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowDownIconBold.displayName = "FlowSplitArrowDownIconBold";
export { FlowSplitArrowDownIconBold };
