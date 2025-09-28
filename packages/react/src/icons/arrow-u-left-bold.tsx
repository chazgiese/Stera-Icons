import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowULeftBold = memo(
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
          d="M5.293 21.707a1 1 0 1 0 1.414-1.414L4.414 18H15.5a7.5 7.5 0 0 0 0-15H8a1 1 0 0 0 0 2h7.5a5.5 5.5 0 0 1 0 11H4.414l2.293-2.293a1 1 0 1 0-1.414-1.414l-4 4a.994.994 0 0 0-.165 1.195l.006.012q.066.115.159.207z"
        />
      </svg>
    ))
);
ArrowULeftBold.displayName = "ArrowULeftBold";
export { ArrowULeftBold };
