import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownLeftIconFill = memo(
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
          d="M21 3a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H9v4a1 1 0 0 1-1.707.707l-5-5-.066-.073-.005-.007a1 1 0 0 1-.088-.128l-.006-.012A1 1 0 0 1 2 15c0-.276.112-.526.293-.707l5-5A1 1 0 0 1 9 10v4h9a2 2 0 0 0 2-2V4a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ArrowCornerDownLeftIconFill.displayName = "ArrowCornerDownLeftIconFill";
export { ArrowCornerDownLeftIconFill };
