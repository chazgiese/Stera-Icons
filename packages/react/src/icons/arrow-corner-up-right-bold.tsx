import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpRightBold = memo(
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
          d="M16.707 1.293a1 1 0 1 0-1.414 1.414L18.586 6H6a4 4 0 0 0-4 4v11a1 1 0 0 0 2 0V10a2 2 0 0 1 2-2h12.586l-3.293 3.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 .148-.192 1 1 0 0 0 .017-1.003l-.006-.012a1 1 0 0 0-.159-.207z"
        />
      </svg>
    ))
);
ArrowCornerUpRightBold.displayName = "ArrowCornerUpRightBold";
export { ArrowCornerUpRightBold };
