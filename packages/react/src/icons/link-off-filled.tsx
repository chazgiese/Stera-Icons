import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LinkOffIconFilled = memo(
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
          d="M4.525 10.526a1.5 1.5 0 0 1 2.121 2.12L5.474 13.82a3.328 3.328 0 0 0 4.707 4.706l1.172-1.173a1.5 1.5 0 0 1 2.121 2.121l-1.172 1.173a6.328 6.328 0 0 1-8.949-8.95zM2.94 2.94a1.5 1.5 0 0 1 2.12 0l16 16a1.5 1.5 0 0 1-2.12 2.12l-16-16a1.5 1.5 0 0 1 0-2.12M11.698 3.353a6.328 6.328 0 0 1 8.948 8.95l-1.172 1.171a1.5 1.5 0 0 1-2.12-2.121l1.171-1.173a3.328 3.328 0 0 0-4.706-4.706l-1.173 1.173a1.5 1.5 0 0 1-2.12-2.121z"
        />
      </svg>
    ))
);
LinkOffIconFilled.displayName = "LinkOffIconFilled";
export { LinkOffIconFilled };
