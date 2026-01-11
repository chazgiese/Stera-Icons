import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ForkKnifeIconFill = memo(
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
          d="M9.75 2a1 1 0 0 1 1 1v6q0 .152-.06.296L9.513 12.04c-.174.404-.263.84-.263 1.28V19.5a2.25 2.25 0 0 1-4.5 0v-6.179c0-.44-.09-.876-.263-1.28L3.311 9.296A.75.75 0 0 1 3.25 9L3.25 3a1 1 0 0 1 2 0v5.25H6V3.5a1 1 0 0 1 2 0v4.75h.75V3a1 1 0 0 1 1-1M19.828 2.27a.75.75 0 0 1 .922.73v16.5a2.25 2.25 0 0 1-4.5 0v-3.75H14a.75.75 0 0 1-.75-.749c-.008-4.297.351-7.198 1.38-9.17 1.075-2.061 2.819-3.003 5.198-3.561"
        />
      </svg>
    ))
);
ForkKnifeIconFill.displayName = "ForkKnifeIconFill";
export { ForkKnifeIconFill };
