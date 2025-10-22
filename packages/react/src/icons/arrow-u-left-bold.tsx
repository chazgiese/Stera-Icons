import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowULeftIconBold = memo(
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
          d="M15.5 3a7.5 7.5 0 0 1 0 15H4.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4-.066-.073-.005-.007a1 1 0 0 1-.088-.128l-.006-.012A1 1 0 0 1 1 17c0-.276.112-.526.293-.707l4-4a1 1 0 1 1 1.414 1.414L4.414 16H15.5a5.5 5.5 0 1 0 0-11H8a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ArrowULeftIconBold.displayName = "ArrowULeftIconBold";
export { ArrowULeftIconBold };
