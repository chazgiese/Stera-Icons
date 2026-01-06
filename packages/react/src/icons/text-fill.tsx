import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextIconFill = memo(
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
          d="M18 1.5A3.5 3.5 0 0 1 21.5 5v1a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h1a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1 0-3h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v1a1.5 1.5 0 1 1-3 0V5A3.5 3.5 0 0 1 6 1.5z"
        />
      </svg>
    ))
);
TextIconFill.displayName = "TextIconFill";
export { TextIconFill };
