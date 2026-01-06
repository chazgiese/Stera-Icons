import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextStrikethroughIconDuotone = memo(
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
          <path d="M17.17 12.746a5.25 5.25 0 0 1-3.67 9.004H7a.75.75 0 0 1 0-1.5h6.5a3.75 3.75 0 1 0 0-7.5z" />
          <path
            fillRule="evenodd"
            d="M11.327 11.246H7.822A5.25 5.25 0 0 1 11.5 2.25H17a.75.75 0 0 1 0 1.5h-5.5a3.75 3.75 0 0 0-.173 7.496"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M22.005 11.246a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
TextStrikethroughIconDuotone.displayName = "TextStrikethroughIconDuotone";
export { TextStrikethroughIconDuotone };
