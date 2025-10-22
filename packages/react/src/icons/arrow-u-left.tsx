import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowULeftIcon = memo(
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
          d="M15.5 3.25a7.25 7.25 0 1 1 0 14.5H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.8.8 0 0 1-.153-.221L1.3 17.26a1 1 0 0 1-.028-.091l-.01-.041-.005-.034a.76.76 0 0 1 .214-.625l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72H15.5a5.75 5.75 0 0 0 0-11.5H8a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ArrowULeftIcon.displayName = "ArrowULeftIcon";
export { ArrowULeftIcon };
