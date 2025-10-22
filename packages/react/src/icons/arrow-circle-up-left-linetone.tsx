import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpLeftIconLinetone = memo(
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
          fillRule="evenodd"
          d="M19.778 19.778c-4.296 4.296-11.26 4.296-15.556 0s-4.296-11.26 0-15.556 11.26-4.296 15.556 0 4.296 11.26 0 15.556m-1.414-1.414A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M16.243 16.243a1 1 0 0 1-1.415 0l-5.364-5.364v4.657a1 1 0 1 1-2 0V8.465a1 1 0 0 1 1-1h7.071a1 1 0 1 1 0 2H10.88l5.364 5.364a1 1 0 0 1 0 1.414"
        />
      </svg>
    ))
);
ArrowCircleUpLeftIconLinetone.displayName = "ArrowCircleUpLeftIconLinetone";
export { ArrowCircleUpLeftIconLinetone };
