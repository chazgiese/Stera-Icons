import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitUpArrowBold = memo(
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
          d="M19.103 1.005q.035.004.069.01l.026.005.033.007q.032.007.064.017.117.038.22.1a1 1 0 0 1 .192.149l3 3a1 1 0 0 1-1.414 1.414L20 4.414V7a5 5 0 0 1-5 5h-2v3.126A4.002 4.002 0 0 1 12 23a4 4 0 0 1-1-7.874V12H9a5 5 0 0 1-5-5V4.414L2.707 5.707a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 .413-.25l.047-.012.048-.011.026-.004Q4.911 1 5 1l.103.005q.035.004.069.01l.026.005.033.007q.032.007.064.017.117.038.22.1a1 1 0 0 1 .192.149l3 3a1 1 0 0 1-1.414 1.414L6 4.414V7a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V4.414l-1.293 1.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 .413-.25l.047-.012.048-.011.026-.004Q18.911 1 19 1zM12 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitUpArrowBold.displayName = "FlowSplitUpArrowBold";
export { FlowSplitUpArrowBold };
