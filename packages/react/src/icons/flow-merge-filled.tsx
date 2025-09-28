import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowMergeFilled = memo(
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
          d="M7.793 13.793a1 1 0 1 1 1.414 1.414l-6.5 6.5a1 1 0 0 1-1.414-1.414zM1.293 2.293a1 1 0 0 1 1.414 0L9.95 9.535A5 5 0 0 0 13.486 11H16.5V8.5a1 1 0 0 1 1.707-.707l3.535 3.535a1 1 0 0 1-.007 1.421L18.2 16.214a1 1 0 0 1-1.7-.714V13h-3.013a7 7 0 0 1-4.95-2.05L1.292 3.707a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
FlowMergeFilled.displayName = "FlowMergeFilled";
export { FlowMergeFilled };
