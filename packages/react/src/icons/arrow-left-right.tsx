import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLeftRightIcon = memo(
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
          d="M16.97 6.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 .094.946l-.094.114-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H3.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5-.052-.056a.75.75 0 0 1 .052-1.004l4.5-4.5a.75.75 0 1 1 1.06 1.06l-3.22 3.22h16.38l-3.22-3.22a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ArrowLeftRightIcon.displayName = "ArrowLeftRightIcon";
export { ArrowLeftRightIcon };
