import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLeftIcon = memo(
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
          d="M11.47 4.47a.75.75 0 1 1 1.06 1.06l-5.72 5.72H19a.75.75 0 0 1 0 1.5H6.81l5.72 5.72a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z"
        />
        <path
          fill="currentColor"
          d="M11.47 4.47a.75.75 0 1 1 1.06 1.06l-5.72 5.72H19a.75.75 0 0 1 0 1.5H6.81l5.72 5.72a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z"
        />
      </svg>
    ))
);
ArrowLeftIcon.displayName = "ArrowLeftIcon";
export { ArrowLeftIcon };
