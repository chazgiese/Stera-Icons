import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownLeftFilled = memo(
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
          d="M21 2a1 1 0 0 1 1 1v11a4 4 0 0 1-4 4H9v4a1 1 0 0 1-1.707.707l-5-5-.066-.073-.005-.007a1 1 0 0 1-.088-.128l-.006-.012A1 1 0 0 1 2 17c0-.276.112-.526.293-.707l5-5A1 1 0 0 1 9 12v4h9a2 2 0 0 0 2-2V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ArrowCornerDownLeftFilled.displayName = "ArrowCornerDownLeftFilled";
export { ArrowCornerDownLeftFilled };
