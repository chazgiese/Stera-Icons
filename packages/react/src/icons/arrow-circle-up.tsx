import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpIcon = memo(
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
          d="M12 17.75a.75.75 0 0 1-.75-.75V8.81l-3.72 3.72a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72V17a.75.75 0 0 1-.75.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75m0-1.5a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleUpIcon.displayName = "ArrowCircleUpIcon";
export { ArrowCircleUpIcon };
