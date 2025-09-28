import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightFilled = memo(
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
          d="M17.617 21.924a1 1 0 0 0 1.09-.217l4-4a1 1 0 0 0 .158-.207l.006-.012A1 1 0 0 0 23 17a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 17 13v3H8.5a5.5 5.5 0 1 1 0-11H16a1 1 0 1 0 0-2H8.5a7.5 7.5 0 0 0 0 15H17v3a1 1 0 0 0 .617.924"
        />
      </svg>
    ))
);
ArrowURightFilled.displayName = "ArrowURightFilled";
export { ArrowURightFilled };
