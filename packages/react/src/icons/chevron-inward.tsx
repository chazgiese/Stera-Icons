import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronInwardIcon = memo(
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
          d="M11.47 14.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12 16.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06zM17.47 2.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06L12 7.94z"
        />
        <path
          fill="currentColor"
          d="M11.47 14.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12 16.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06zM17.47 2.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06L12 7.94z"
        />
      </svg>
    ))
);
ChevronInwardIcon.displayName = "ChevronInwardIcon";
export { ChevronInwardIcon };
