import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightTop = memo(
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
          d="M17.47 2.47a.75.75 0 0 1 1.06 0l4 4q.049.048.087.106l.007.008a1 1 0 0 1 .058.106q.01.023.018.048.017.045.027.091.007.02.01.041l.006.034a.742.742 0 0 1-.097.469.8.8 0 0 1-.116.157l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H8.5a5.75 5.75 0 1 0 0 11.5H16a.75.75 0 0 1 0 1.5H8.5a7.25 7.25 0 0 1 0-14.5h11.69l-2.72-2.72a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ArrowURightTop.displayName = "ArrowURightTop";
export { ArrowURightTop };
