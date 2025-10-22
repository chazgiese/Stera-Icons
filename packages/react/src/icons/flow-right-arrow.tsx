import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowRightArrowIcon = memo(
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
          d="M16.47 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72h-9.5a4.75 4.75 0 1 1 0-1.5h9.5l-3.72-3.72a.75.75 0 0 1 0-1.06M6 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.47 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72h-9.5a4.75 4.75 0 1 1 0-1.5h9.5l-3.72-3.72a.75.75 0 0 1 0-1.06M6 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowRightArrowIcon.displayName = "FlowRightArrowIcon";
export { FlowRightArrowIcon };
