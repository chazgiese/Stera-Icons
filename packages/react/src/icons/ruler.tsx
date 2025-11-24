import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulerIcon = memo(
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
          d="M6.086 2.354a2 2 0 0 1 2.828 0l12.733 12.731a2 2 0 0 1 0 2.83l-3.733 3.732a2 2 0 0 1-2.829 0L2.354 8.914a2 2 0 0 1 0-2.828zm1.768 1.06a.5.5 0 0 0-.707 0L3.414 7.147a.5.5 0 0 0 0 .707L6.25 10.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.94 1.94 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.94 1.94 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 2.836 2.835a.5.5 0 0 0 .708 0l3.731-3.731a.5.5 0 0 0 0-.708z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RulerIcon.displayName = "RulerIcon";
export { RulerIcon };
