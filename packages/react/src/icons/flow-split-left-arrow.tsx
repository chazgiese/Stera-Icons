import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitLeftArrow = memo(
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
          d="M4.47 1.47A.75.75 0 0 1 5.75 2v2.25H7.5a4.25 4.25 0 0 1 4.25 4.25 2.75 2.75 0 0 0 2.75 2.75h.825a3.751 3.751 0 0 1 7.425.75 3.75 3.75 0 0 1-7.425.75H14.5a2.75 2.75 0 0 0-2.75 2.75 4.25 4.25 0 0 1-4.25 4.25H5.75V22a.75.75 0 0 1-1.28.53l-3-3q-.016-.019-.032-.038a.744.744 0 0 1 .032-1.023l3-3a.75.75 0 0 1 1.28.53v2.25H7.5a2.75 2.75 0 0 0 2.75-2.75c0-1.451.729-2.733 1.84-3.5a4.25 4.25 0 0 1-1.84-3.5A2.75 2.75 0 0 0 7.5 5.75H5.75V8a.75.75 0 0 1-1.28.53l-3-3q-.016-.016-.03-.034a.745.745 0 0 1 .03-1.026zM19 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitLeftArrow.displayName = "FlowSplitLeftArrow";
export { FlowSplitLeftArrow };
