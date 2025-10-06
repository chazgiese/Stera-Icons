import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitLeftArrowFilled = memo(
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
          d="M4.293 1.293A1 1 0 0 1 6 2v2h1a5 5 0 0 1 5 5v2h3.126A4.002 4.002 0 0 1 23 12a4 4 0 0 1-7.874 1H12v2a5 5 0 0 1-5 5H6v2a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1-.066-.073l-.056-.075A1 1 0 0 1 1 19c0-.276.112-.526.293-.707l3-3A1 1 0 0 1 6 16v2h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H6v2a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1-.066-.073L1.17 5.56a.996.996 0 0 1 .122-1.267z"
        />
      </svg>
    ))
);
FlowSplitLeftArrowFilled.displayName = "FlowSplitLeftArrowFilled";
export { FlowSplitLeftArrowFilled };
