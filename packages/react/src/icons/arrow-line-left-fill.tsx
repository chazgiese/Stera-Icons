import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineLeftIconFill = memo(
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
          d="M3 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M12.701 5.238c.756-.756 2.049-.22 2.049.848V11H21a1 1 0 1 1 0 2h-6.25v4.914c0 1.069-1.293 1.604-2.049.848l-5.856-5.857c-.5-.5-.5-1.31 0-1.81z"
        />
      </svg>
    ))
);
ArrowLineLeftIconFill.displayName = "ArrowLineLeftIconFill";
export { ArrowLineLeftIconFill };
