import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CommentBubbleIconFillDuotone = memo(
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
          d="M12 4a8 8 0 0 1 0 16H5.571c-.585 0-.712-.007-.794-.025a1 1 0 0 1-.752-.752C4.007 19.14 4 19.015 4 18.429V12a8 8 0 0 1 8-8"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10H5.57c-.476 0-.882.006-1.24-.075a3 3 0 0 1-2.256-2.257c-.081-.357-.075-.763-.075-1.24V12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-8 8v6.429c0 .586.007.712.025.794a1 1 0 0 0 .752.752c.082.018.208.025.794.025H12a8 8 0 0 0 0-16"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CommentBubbleIconFillDuotone.displayName = "CommentBubbleIconFillDuotone";
export { CommentBubbleIconFillDuotone };
