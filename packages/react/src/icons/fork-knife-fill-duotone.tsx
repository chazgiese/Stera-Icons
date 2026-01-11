import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ForkKnifeIconFillDuotone = memo(
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
          <path d="M9.25 19.5a2.25 2.25 0 0 1-4.5 0V12.52c.139.143.33.229.536.229h3.428a.75.75 0 0 0 .536-.229zM19.828 2.27a.752.752 0 0 1 .922.73v12.75H14a.75.75 0 0 1-.75-.75c-.008-4.296.351-7.198 1.38-9.17 1.075-2.06 2.819-3.002 5.198-3.56" />
        </g>
        <path
          fill="currentColor"
          d="M9.75 2a1 1 0 0 1 1 1v6q0 .152-.06.296l-1.287 3a.75.75 0 0 1-.69.454H5.287a.75.75 0 0 1-.69-.454l-1.285-3A.75.75 0 0 1 3.25 9L3.25 3a1 1 0 0 1 2 0v5.25H6V3.5a1 1 0 0 1 2 0v4.75h.75V3a1 1 0 0 1 1-1M20.75 19.5a2.25 2.25 0 0 1-4.5 0v-3.75h4.5z"
        />
      </svg>
    ))
);
ForkKnifeIconFillDuotone.displayName = "ForkKnifeIconFillDuotone";
export { ForkKnifeIconFillDuotone };
