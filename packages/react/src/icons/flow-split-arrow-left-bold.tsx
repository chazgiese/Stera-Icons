import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowLeftIconBold = memo(
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
          d="M23 12a4 4 0 0 1-7.874 1H12v4a3 3 0 0 1-3 3H4.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1-.148-.192 1 1 0 0 1-.1-.218q-.01-.033-.016-.067l-.008-.032-.004-.026A1 1 0 0 1 1 19q.001-.09.017-.173l.004-.026.011-.048q.005-.024.012-.047a1 1 0 0 1 .25-.413l3-3a1 1 0 1 1 1.413 1.414L4.414 18H9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1-.148-.192 1 1 0 0 1-.1-.218q-.01-.033-.016-.067l-.008-.032-.004-.026A1 1 0 0 1 1 5q.001-.09.017-.173l.004-.026.011-.048q.005-.024.012-.047a1 1 0 0 1 .25-.413l3-3a1 1 0 0 1 1.413 1.414L4.414 4H9a3 3 0 0 1 3 3v4h3.126A4.002 4.002 0 0 1 23 12m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowLeftIconBold.displayName = "FlowSplitArrowLeftIconBold";
export { FlowSplitArrowLeftIconBold };
