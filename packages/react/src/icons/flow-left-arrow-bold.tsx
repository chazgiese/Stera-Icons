import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowLeftArrowIconBold = memo(
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
          d="M6.293 6.293a1 1 0 1 1 1.414 1.414L4.414 11h8.687a5.001 5.001 0 1 1 0 2H4.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414zM18 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowLeftArrowIconBold.displayName = "FlowLeftArrowIconBold";
export { FlowLeftArrowIconBold };
