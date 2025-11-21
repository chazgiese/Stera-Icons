import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuestionMarkIconLinetone = memo(
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
          d="M12 2c3.688 0 7 2.523 7 6 0 3.159-2.734 5.53-6 5.937V15.5a1 1 0 1 1-2 0V13a1 1 0 0 1 1-1c2.94 0 5-1.954 5-4s-2.06-4-5-4C9.424 4 7.39 5.521 6.972 7.236a1 1 0 0 1-1.943-.472C5.723 3.914 8.77 2 12 2"
        />
        <path
          fill="currentColor"
          d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
          opacity={0.4}
        />
      </svg>
    ))
);
QuestionMarkIconLinetone.displayName = "QuestionMarkIconLinetone";
export { QuestionMarkIconLinetone };
