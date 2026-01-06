import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowRightIconFill = memo(
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
          d="M1 12a4 4 0 0 0 7.874 1H12v4a3 3 0 0 0 3 3h3v2a1 1 0 0 0 1.707.707l3-3a.997.997 0 0 0 .25-.414l.01-.047q.008-.024.013-.048l.003-.026Q23 19.088 23 19q-.001-.09-.017-.173l-.003-.026-.012-.048q-.005-.024-.012-.047a1 1 0 0 0-.249-.413l-3-3A1 1 0 0 0 18 16v2h-3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3v2a1 1 0 0 0 1.707.707l3-3a.996.996 0 0 0 .25-.414l.01-.047q.008-.024.013-.048l.003-.026Q23 5.088 23 5q-.001-.09-.017-.173l-.003-.026-.012-.048q-.005-.024-.012-.047a1 1 0 0 0-.249-.413l-3-3A1 1 0 0 0 18 2v2h-3a3 3 0 0 0-3 3v4H8.874A4.002 4.002 0 0 0 1 12"
        />
      </svg>
    ))
);
FlowSplitArrowRightIconFill.displayName = "FlowSplitArrowRightIconFill";
export { FlowSplitArrowRightIconFill };
