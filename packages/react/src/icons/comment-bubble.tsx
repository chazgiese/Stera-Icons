import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CommentBubbleIcon = memo(
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
          fillRule="evenodd"
          d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75H5.571c-.49 0-.86.004-1.183-.07a2.75 2.75 0 0 1-2.069-2.068c-.073-.322-.069-.693-.069-1.183V12c0-5.385 4.365-9.75 9.75-9.75m0 1.5A8.25 8.25 0 0 0 3.75 12v6.429c0 .572.005.733.031.85.107.467.473.833.94.94.117.026.278.031.85.031H12a8.25 8.25 0 1 0 0-16.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CommentBubbleIcon.displayName = "CommentBubbleIcon";
export { CommentBubbleIcon };
