import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextStrikethroughIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M18.693 13.496A6 6 0 0 1 13.5 22.5H7a1.5 1.5 0 0 1 0-3h6.5a3 3 0 1 0 0-6c-3.488 0 4.75-.004 5.193-.004M17 1.5a1.5 1.5 0 0 1 0 3h-5.5a3 3 0 0 0-.154 5.996H6.303A6 6 0 0 1 11.5 1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M22.005 10.496a1.5 1.5 0 0 1 0 3h-20a1.5 1.5 0 0 1 0-3z"
        />
      </svg>
    ))
);
TextStrikethroughIconFillDuotone.displayName =
  "TextStrikethroughIconFillDuotone";
export { TextStrikethroughIconFillDuotone };
