import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuestionMarkIconFillDuotone = memo(
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
          d="M12 1.5c3.874 0 7.5 2.666 7.5 6.5 0 3.333-2.74 5.781-6 6.365v.889a1.5 1.5 0 0 1-3 0V13a1.5 1.5 0 0 1 1.5-1.5c2.753 0 4.5-1.811 4.5-3.5S14.753 4.5 12 4.5c-2.414 0-4.194 1.424-4.543 2.855a1.5 1.5 0 0 1-2.914-.71C5.306 3.512 8.608 1.5 12 1.5"
        />
        <path
          fill="currentColor"
          d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
          opacity={0.4}
        />
      </svg>
    ))
);
QuestionMarkIconFillDuotone.displayName = "QuestionMarkIconFillDuotone";
export { QuestionMarkIconFillDuotone };
