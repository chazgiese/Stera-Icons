import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowULeftIconFill = memo(
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
          d="M15.5 3a7.5 7.5 0 0 1 0 15H7v3a1 1 0 0 1-1.707.707l-4-4-.066-.073-.005-.007a1 1 0 0 1-.088-.128l-.006-.012A1 1 0 0 1 1 17c0-.276.112-.526.293-.707l4-4A1 1 0 0 1 7 13v3h8.5a5.5 5.5 0 1 0 0-11H8a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ArrowULeftIconFill.displayName = "ArrowULeftIconFill";
export { ArrowULeftIconFill };
