import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightTopIconBold = memo(
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
          d="M18.707 2.293a1 1 0 1 0-1.414 1.414L19.586 6H8.5a7.5 7.5 0 1 0 0 15H16a1 1 0 0 0 0-2H8.5a5.5 5.5 0 0 1 0-11h11.086l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a.994.994 0 0 0 .165-1.195l-.006-.012a1 1 0 0 0-.159-.207z"
        />
      </svg>
    ))
);
ArrowURightTopIconBold.displayName = "ArrowURightTopIconBold";
export { ArrowURightTopIconBold };
