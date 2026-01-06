import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowLeftArrowIconDuotone = memo(
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
          d="M13.31 11.25a4.8 4.8 0 0 0 0 1.5h-9.5L3.06 12l.75-.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.47 6.47a.75.75 0 1 1 1.06 1.06L3.06 12l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowLeftArrowIconDuotone.displayName = "FlowLeftArrowIconDuotone";
export { FlowLeftArrowIconDuotone };
