import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowLeftIconFilled = memo(
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
          d="M23 12a4 4 0 0 1-7.874 1H12v4a3 3 0 0 1-3 3H6v2a1 1 0 0 1-1.707.707l-3-3a.995.995 0 0 1-.249-.414q-.007-.023-.012-.047l-.011-.048-.004-.026A1 1 0 0 1 1 19q.001-.09.017-.173l.004-.026.011-.048q.005-.024.012-.047a1 1 0 0 1 .25-.413l3-3A1 1 0 0 1 6 16v2h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6v2a1 1 0 0 1-1.707.707l-3-3a.995.995 0 0 1-.249-.414q-.007-.023-.012-.047l-.011-.048-.004-.026A1 1 0 0 1 1 5q.001-.09.017-.173l.004-.026.011-.048q.005-.024.012-.047a1 1 0 0 1 .25-.413l3-3A1 1 0 0 1 6 2v2h3a3 3 0 0 1 3 3v4h3.126A4.002 4.002 0 0 1 23 12"
        />
      </svg>
    ))
);
FlowSplitArrowLeftIconFilled.displayName = "FlowSplitArrowLeftIconFilled";
export { FlowSplitArrowLeftIconFilled };
