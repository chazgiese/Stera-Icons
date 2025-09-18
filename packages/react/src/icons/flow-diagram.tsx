import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowDiagram = memo(
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
          d="M8.8 1.25a1.95 1.95 0 0 1 1.95 1.95v.05H17A2.75 2.75 0 0 1 19.75 6v4A2.75 2.75 0 0 1 17 12.75h-1.19l-3.28 3.281a.75.75 0 0 1-1.06 0L8.19 12.75H7c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h6.25v-.05a1.95 1.95 0 0 1 1.95-1.95h3.6a1.95 1.95 0 0 1 1.95 1.95v1.6a1.95 1.95 0 0 1-1.95 1.95h-3.6a1.95 1.95 0 0 1-1.95-1.95v-.05H7A2.75 2.75 0 0 1 4.25 18v-4A2.75 2.75 0 0 1 7 11.25h1.19l3.28-3.28a.75.75 0 0 1 1.06 0l3.28 3.28H17c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-6.25v.05A1.95 1.95 0 0 1 8.8 6.75H5.2A1.95 1.95 0 0 1 3.25 4.8V3.2A1.95 1.95 0 0 1 5.2 1.25zm6.4 17.5a.45.45 0 0 0-.45.45v1.6c0 .248.202.45.45.45h3.6a.45.45 0 0 0 .45-.45v-1.6a.45.45 0 0 0-.45-.45zM9.56 12 12 14.44 14.44 12 12 9.56zM5.2 2.75a.45.45 0 0 0-.45.45v1.6c0 .248.202.45.45.45h3.6a.45.45 0 0 0 .45-.45V3.2a.45.45 0 0 0-.45-.45z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowDiagram.displayName = "FlowDiagram";
export { FlowDiagram };
