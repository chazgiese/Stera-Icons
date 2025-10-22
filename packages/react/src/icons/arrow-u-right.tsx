import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightIcon = memo(
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
          d="M8.5 3.25a7.25 7.25 0 0 0 0 14.5h11.69l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.8.8 0 0 0 .153-.221l.018-.048q.017-.045.027-.091.006-.02.01-.041l.006-.034a.748.748 0 0 0-.214-.625l-4-4a.75.75 0 1 0-1.06 1.06l2.72 2.72H8.5a5.75 5.75 0 0 1 0-11.5H16a.75.75 0 0 0 0-1.5z"
        />
      </svg>
    ))
);
ArrowURightIcon.displayName = "ArrowURightIcon";
export { ArrowURightIcon };
