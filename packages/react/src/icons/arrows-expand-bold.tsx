import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsExpandIconBold = memo(
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
          d="M9 3a1 1 0 0 1 0 2H6.414L12 10.586 17.586 5H15a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414L13.414 12 19 17.586V15a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586L12 13.414 6.414 19H9a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v2.586L10.586 12 5 6.414V9a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
ArrowsExpandIconBold.displayName = "ArrowsExpandIconBold";
export { ArrowsExpandIconBold };
