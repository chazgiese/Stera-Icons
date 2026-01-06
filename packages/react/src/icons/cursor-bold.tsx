import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorIconBold = memo(
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
          d="M3.112 4.823c-.558-1.675 1.035-3.269 2.71-2.71l15.712 5.236c1.99.664 1.94 3.497-.072 4.09l-6.974 2.049-2.05 6.974c-.592 2.013-3.425 2.063-4.089.072zm1.999-.82a.15.15 0 0 0-.068.04.15.15 0 0 0-.04.068.14.14 0 0 0 .006.08l5.238 15.711c.017.052.037.068.048.075a.16.16 0 0 0 .09.023c.04-.001.071-.013.088-.026.01-.007.03-.024.046-.077l2.205-7.496.043-.118a1 1 0 0 1 .634-.559l7.496-2.205c.053-.015.07-.035.077-.046A.16.16 0 0 0 21 9.385a.16.16 0 0 0-.023-.09c-.007-.01-.023-.032-.075-.05L5.19 4.01a.14.14 0 0 0-.08-.006"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CursorIconBold.displayName = "CursorIconBold";
export { CursorIconBold };
