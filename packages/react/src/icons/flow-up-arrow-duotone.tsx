import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowUpArrowIconDuotone = memo(
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
          d="M12.75 3.81v9.499a4.8 4.8 0 0 0-1.5 0V3.81l.75-.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 13.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 1.25c.199 0 .39.08.53.22l5 5a.75.75 0 1 1-1.06 1.06L12 3.06 7.53 7.53a.75.75 0 1 1-1.06-1.06l5-5 .114-.094A.75.75 0 0 1 12 1.25"
        />
      </svg>
    ))
);
FlowUpArrowIconDuotone.displayName = "FlowUpArrowIconDuotone";
export { FlowUpArrowIconDuotone };
