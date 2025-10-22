import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightIconBold = memo(
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
          d="M8.5 3a7.5 7.5 0 1 0 0 15h11.086l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4 .066-.073.005-.007q.05-.06.088-.128l.006-.012A1 1 0 0 0 23 17a1 1 0 0 0-.293-.707l-4-4a1 1 0 1 0-1.414 1.414L19.586 16H8.5a5.5 5.5 0 1 1 0-11H16a1 1 0 1 0 0-2z"
        />
      </svg>
    ))
);
ArrowURightIconBold.displayName = "ArrowURightIconBold";
export { ArrowURightIconBold };
