import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsLeftRightIcon = memo(
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
          d="M5.97 12.97a.75.75 0 1 1 1.06 1.06l-2.72 2.72H20.5a.75.75 0 1 1 0 1.5H4.31l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1-.052-1.004l.052-.056zM16.97 2.97a.75.75 0 0 1 1.06 0l4 4 .094.114a.75.75 0 0 1-.094.946l-4 4a.75.75 0 0 1-1.06-1.06l2.72-2.72H3.5a.75.75 0 0 1 0-1.5h16.19l-2.72-2.72a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ArrowsLeftRightIcon.displayName = "ArrowsLeftRightIcon";
export { ArrowsLeftRightIcon };
