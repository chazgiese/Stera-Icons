import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowRightIconBold = memo(
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
          d="M1 12a4 4 0 0 0 7.874 1H12v4a3 3 0 0 0 3 3h4.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 .149-.192 1 1 0 0 0 .1-.218l.016-.067.008-.032.003-.026Q23 19.088 23 19q-.001-.09-.017-.173l-.003-.026-.012-.048q-.005-.024-.012-.047a1 1 0 0 0-.249-.413l-3-3a1 1 0 0 0-1.414 1.414L19.586 18H15a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 .149-.192 1 1 0 0 0 .1-.218l.016-.067.008-.032.003-.026Q23 5.088 23 5q-.001-.09-.017-.173l-.003-.026-.012-.048q-.005-.024-.012-.047a1 1 0 0 0-.249-.413l-3-3a1 1 0 0 0-1.414 1.414L19.586 4H15a3 3 0 0 0-3 3v4H8.874A4.002 4.002 0 0 0 1 12m2 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowRightIconBold.displayName = "FlowSplitArrowRightIconBold";
export { FlowSplitArrowRightIconBold };
