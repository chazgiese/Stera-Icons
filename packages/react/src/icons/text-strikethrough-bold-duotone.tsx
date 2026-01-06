import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextStrikethroughIconBoldDuotone = memo(
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
          <path d="M17.74 12.996A5.5 5.5 0 0 1 13.5 22H7a1 1 0 1 1 0-2h6.5a3.5 3.5 0 1 0 0-7c-3.293 0 3.8-.004 4.24-.004M17 2a1 1 0 1 1 0 2h-5.5a3.5 3.5 0 0 0-.144 6.996H7.254A5.5 5.5 0 0 1 11.5 2z" />
        </g>
        <path
          fill="currentColor"
          d="M22.005 10.996a1 1 0 1 1 0 2h-20a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
TextStrikethroughIconBoldDuotone.displayName =
  "TextStrikethroughIconBoldDuotone";
export { TextStrikethroughIconBoldDuotone };
