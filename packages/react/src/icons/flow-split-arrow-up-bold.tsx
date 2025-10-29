import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowUpIconBold = memo(
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
          d="M12 23a4 4 0 0 0 1-7.874V12h4a3 3 0 0 0 3-3V4.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-.192-.148 1 1 0 0 0-.218-.1q-.033-.01-.066-.017l-.033-.007-.026-.004A1 1 0 0 0 19 1q-.088.001-.173.017l-.026.004-.048.011-.047.012a1 1 0 0 0-.413.249l-3 3a1 1 0 1 0 1.414 1.414L18 4.414V9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-.192-.148 1 1 0 0 0-.218-.1q-.033-.01-.066-.017l-.033-.007-.026-.004A1 1 0 0 0 5 1q-.089.001-.173.017l-.026.004-.048.011-.047.012a1 1 0 0 0-.413.249l-3 3a1 1 0 1 0 1.414 1.414L4 4.414V9a3 3 0 0 0 3 3h4v3.126A4.002 4.002 0 0 0 12 23m0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowUpIconBold.displayName = "FlowSplitArrowUpIconBold";
export { FlowSplitArrowUpIconBold };
