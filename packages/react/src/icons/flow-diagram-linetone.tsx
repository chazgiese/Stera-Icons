import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowDiagramIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M9.5 13H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7v2H7a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h2.5zM17 3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-2.5v-2H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-7V3z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.025 17.012A2.2 2.2 0 0 1 21 19.2v1.6a2.2 2.2 0 0 1-2.2 2.2h-3.6a2.2 2.2 0 0 1-2.2-2.2v-1.6a2.2 2.2 0 0 1 2.2-2.2h3.6zM15.2 19a.2.2 0 0 0-.2.2v1.6c0 .11.09.2.2.2h3.6a.2.2 0 0 0 .2-.2v-1.6a.2.2 0 0 0-.16-.196L18.8 19zM11.293 7.793a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1 0 1.414l-3.5 3.501a1 1 0 0 1-1.414 0l-3.5-3.501a1 1 0 0 1 0-1.414zM9.914 12 12 14.086 14.086 12 12 9.914zM9.025 1.012A2.2 2.2 0 0 1 11 3.2v1.6A2.2 2.2 0 0 1 8.8 7H5.2A2.2 2.2 0 0 1 3 4.8V3.2A2.2 2.2 0 0 1 5.2 1h3.6zM5.2 3a.2.2 0 0 0-.2.2v1.6c0 .11.09.2.2.2h3.6a.2.2 0 0 0 .2-.2V3.2a.2.2 0 0 0-.16-.196L8.8 3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowDiagramIconLinetone.displayName = "FlowDiagramIconLinetone";
export { FlowDiagramIconLinetone };
