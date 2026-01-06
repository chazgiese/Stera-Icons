import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CirclesThreeIconFill = memo(
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
          d="M6.5 11.527a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 11.527a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M12 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9"
        />
      </svg>
    ))
);
CirclesThreeIconFill.displayName = "CirclesThreeIconFill";
export { CirclesThreeIconFill };
