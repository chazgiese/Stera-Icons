import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ReplyFilled = memo(
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
          d="M10.293 3.293A1 1 0 0 1 12 4v4.514c3.274.085 5.79.625 7.49 2.187C21.381 12.442 22 15.201 22 19a1 1 0 0 1-1.914.406l-.008-.017-.056-.108a6 6 0 0 0-.26-.43 7.3 7.3 0 0 0-1.181-1.358C17.491 16.512 15.722 15.5 13 15.5h-1V20a1 1 0 0 1-1.707.707l-8-8a1 1 0 0 1 0-1.414z"
        />
      </svg>
    ))
);
ReplyFilled.displayName = "ReplyFilled";
export { ReplyFilled };
