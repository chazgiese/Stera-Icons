import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CommentBubbleFilled = memo(
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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10H5.57c-.476 0-.882.006-1.24-.075a3 3 0 0 1-2.256-2.257c-.081-.357-.075-.763-.075-1.24V12C2 6.477 6.477 2 12 2"
        />
      </svg>
    ))
);
CommentBubbleFilled.displayName = "CommentBubbleFilled";
export { CommentBubbleFilled };
