import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ActivityIconDuotone = memo(
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
          d="M22 11.25a.75.75 0 0 1 0 1.5h-3.099a.5.5 0 0 0-.474.342l-2.715 8.145a.75.75 0 0 1-1.424 0l-3-9 1.424-.474L15 18.627l2.004-6.01A2 2 0 0 1 18.9 11.25z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 2.25a.75.75 0 0 1 .712.513l3 9-1.424.474L9 5.372l-2.003 6.01A2 2 0 0 1 5.1 12.75H2a.75.75 0 0 1 0-1.5h3.099a.5.5 0 0 0 .474-.342l2.715-8.145.047-.11A.75.75 0 0 1 9 2.25"
        />
      </svg>
    ))
);
ActivityIconDuotone.displayName = "ActivityIconDuotone";
export { ActivityIconDuotone };
