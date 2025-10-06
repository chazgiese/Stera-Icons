import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitUpArrowFilled = memo(
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
          d="M19.103 1.005q.034.004.069.01l.026.005.032.007q.033.007.065.017.117.038.22.1.104.063.192.149l3 3A1 1 0 0 1 22 6h-2v1a5 5 0 0 1-5 5h-2v3.126A4.002 4.002 0 0 1 12 23a4 4 0 0 1-1-7.874V12H9a5 5 0 0 1-5-5V6H2a1 1 0 0 1-.707-1.707l3-3a1 1 0 0 1 .413-.25q.023-.007.047-.012l.048-.011.026-.004Q4.911 1 5 1l.103.005q.034.004.069.01l.026.005.033.007q.032.007.064.017.117.038.22.1.104.063.192.149l3 3A1 1 0 0 1 8 6H6v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6h-2a1 1 0 0 1-.707-1.707l3-3a1 1 0 0 1 .413-.25q.023-.007.047-.012l.048-.011.026-.004Q18.911 1 19 1z"
        />
      </svg>
    ))
);
FlowSplitUpArrowFilled.displayName = "FlowSplitUpArrowFilled";
export { FlowSplitUpArrowFilled };
