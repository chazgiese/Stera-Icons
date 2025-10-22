import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowUpIconFilled = memo(
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
          d="M12 23a4 4 0 0 0 1-7.874V12h4a3 3 0 0 0 3-3V6h2a1 1 0 0 0 .707-1.707l-3-3a.994.994 0 0 0-.414-.249q-.023-.007-.047-.012l-.048-.011-.026-.004A1 1 0 0 0 19 1q-.088.001-.173.017l-.026.004-.048.011q-.024.005-.047.012a1 1 0 0 0-.413.249l-3 3A1 1 0 0 0 16 6h2v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6h2a1 1 0 0 0 .707-1.707l-3-3a.994.994 0 0 0-.414-.249q-.023-.007-.047-.012l-.048-.011-.026-.004A1 1 0 0 0 5 1q-.089.001-.173.017l-.026.004-.048.011-.047.012a1 1 0 0 0-.413.249l-3 3A1 1 0 0 0 2 6h2v3a3 3 0 0 0 3 3h4v3.126A4.002 4.002 0 0 0 12 23"
        />
      </svg>
    ))
);
FlowSplitArrowUpIconFilled.displayName = "FlowSplitArrowUpIconFilled";
export { FlowSplitArrowUpIconFilled };
