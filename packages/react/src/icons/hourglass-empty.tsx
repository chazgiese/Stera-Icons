import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HourglassEmpty = memo(
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
          d="M12 14.165c.335 0 .701.116.981.385l.115.124.146.17q.228.253.504.474l1.284 1.028a3.25 3.25 0 0 1 1.18 2.039.75.75 0 0 1-.74.865H8.53a.75.75 0 0 1-.74-.865 3.25 3.25 0 0 1 1.18-2.04l1.284-1.027q.369-.296.65-.644l.115-.124c.28-.269.646-.385.981-.385"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17 1.25A2.75 2.75 0 0 1 19.75 4v1.116a6.75 6.75 0 0 1-2.533 5.27l-1.284 1.028a.75.75 0 0 0 0 1.172l1.284 1.027a6.75 6.75 0 0 1 2.533 5.27V20A2.75 2.75 0 0 1 17 22.75H7A2.75 2.75 0 0 1 4.25 20v-1.116c0-2.05.932-3.99 2.533-5.27l1.284-1.028a.75.75 0 0 0 0-1.172l-1.284-1.027a6.75 6.75 0 0 1-2.533-5.27V4A2.75 2.75 0 0 1 7 1.25zM7 2.75c-.69 0-1.25.56-1.25 1.25v1.116a5.25 5.25 0 0 0 1.97 4.1l1.284 1.027a2.25 2.25 0 0 1 0 3.514L7.72 14.784a5.25 5.25 0 0 0-1.971 4.1V20c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-1.116a5.25 5.25 0 0 0-1.97-4.1l-1.284-1.027a2.25 2.25 0 0 1 0-3.514l1.283-1.027a5.25 5.25 0 0 0 1.971-4.1V4c0-.69-.56-1.25-1.25-1.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HourglassEmpty.displayName = "HourglassEmpty";
export { HourglassEmpty };
