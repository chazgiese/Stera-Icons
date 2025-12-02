import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlashIconBold = memo(
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
          d="M15.715 1.249a1 1 0 0 1 1.612 1.057L15 9.556l4.327 1.499a1 1 0 0 1 .333 1.696l-11.375 10a1 1 0 0 1-1.612-1.057l2.326-7.252-4.326-1.497a1 1 0 0 1-.333-1.696zM6.95 11.616l3.627 1.257a1 1 0 0 1 .625 1.251l-1.52 4.735 7.367-6.476-3.626-1.256a1 1 0 0 1-.625-1.251l1.518-4.736z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlashIconBold.displayName = "FlashIconBold";
export { FlashIconBold };
