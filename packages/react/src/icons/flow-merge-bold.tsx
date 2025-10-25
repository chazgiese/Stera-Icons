import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowMergeIconBold = memo(
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
          d="M7.793 13.793a1 1 0 1 1 1.414 1.414l-6.5 6.5a1 1 0 0 1-1.414-1.414zM1.293 2.293a1 1 0 0 1 1.414 0L9.95 9.535A5 5 0 0 0 13.485 11h5.1l-1.792-1.793a1 1 0 1 1 1.414-1.414l3.536 3.535a1 1 0 0 1-.008 1.421L18.2 16.214a.999.999 0 1 1-1.398-1.428L18.623 13h-5.138a7 7 0 0 1-4.95-2.05L1.293 3.707a1 1 0 0 1 0-1.414"
        />
        <path
          fill="currentColor"
          d="M7.793 13.793a1 1 0 1 1 1.414 1.414l-6.5 6.5a1 1 0 0 1-1.414-1.414zM1.293 2.293a1 1 0 0 1 1.414 0L9.95 9.535A5 5 0 0 0 13.485 11h5.1l-1.792-1.793a1 1 0 1 1 1.414-1.414l3.536 3.535a1 1 0 0 1-.008 1.42L18.2 16.215a.999.999 0 1 1-1.398-1.428L18.623 13h-5.138a7 7 0 0 1-4.95-2.05L1.293 3.707a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
FlowMergeIconBold.displayName = "FlowMergeIconBold";
export { FlowMergeIconBold };
