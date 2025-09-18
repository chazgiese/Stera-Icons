import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowDiagramBold = memo(
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
          d="M9.025 1.012A2.2 2.2 0 0 1 10.991 3H17a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.086l-3.207 3.208a1 1 0 0 1-1.414 0L8.086 13H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6.01a2.2 2.2 0 0 1 2.19-2h3.6l.225.012A2.2 2.2 0 0 1 21 19.2v1.6a2.2 2.2 0 0 1-2.2 2.2h-3.6a2.2 2.2 0 0 1-2.19-2H7a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1.086l3.207-3.207a1 1 0 0 1 1.414 0L15.914 11H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-6.01A2.2 2.2 0 0 1 8.8 7H5.2A2.2 2.2 0 0 1 3 4.8V3.2A2.2 2.2 0 0 1 5.2 1h3.6zM15.2 19a.2.2 0 0 0-.2.2v1.6c0 .11.09.2.2.2h3.6a.2.2 0 0 0 .2-.2v-1.6a.2.2 0 0 0-.16-.196L18.8 19zm-5.286-7L12 14.086 14.086 12 12 9.914zM5.2 3a.2.2 0 0 0-.2.2v1.6c0 .11.09.2.2.2h3.6a.2.2 0 0 0 .2-.2V3.2a.2.2 0 0 0-.16-.196L8.8 3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowDiagramBold.displayName = "FlowDiagramBold";
export { FlowDiagramBold };
