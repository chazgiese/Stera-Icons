import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitUpIconBold = memo(
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
          d="M1 5a4 4 0 0 0 3 3.874V10a3 3 0 0 0 3 3h4v2.126A4.002 4.002 0 0 0 12 23a4 4 0 0 0 1-7.874V13h4a3 3 0 0 0 3-3V8.874A4.002 4.002 0 0 0 19 1a4 4 0 0 0-1 7.874V10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8.874A4.002 4.002 0 0 0 5 1a4 4 0 0 0-4 4m16 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-7 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0M3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitUpIconBold.displayName = "FlowSplitUpIconBold";
export { FlowSplitUpIconBold };
