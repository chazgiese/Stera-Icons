import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpLeftIconBold = memo(
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
          d="M7.293 1.293a1 1 0 1 1 1.414 1.414L5.414 6H18a4 4 0 0 1 4 4v11a1 1 0 1 1-2 0V10a2 2 0 0 0-2-2H5.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1-.148-.192.99.99 0 0 1-.017-1.003l.006-.012q.066-.115.159-.207z"
        />
      </svg>
    ))
);
ArrowCornerUpLeftIconBold.displayName = "ArrowCornerUpLeftIconBold";
export { ArrowCornerUpLeftIconBold };
