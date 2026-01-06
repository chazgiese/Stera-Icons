import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpRightIcon = memo(
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
          d="M3 20.75a.75.75 0 0 1-.75-.75v-8A3.75 3.75 0 0 1 6 8.25h13.19l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5 .094.114a1 1 0 0 1 .059.107l.018.048q.017.045.027.091.006.02.01.041l.006.034a.748.748 0 0 1-.214.625l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H6A2.25 2.25 0 0 0 3.75 12v8a.75.75 0 0 1-.75.75"
        />
      </svg>
    ))
);
ArrowCornerUpRightIcon.displayName = "ArrowCornerUpRightIcon";
export { ArrowCornerUpRightIcon };
