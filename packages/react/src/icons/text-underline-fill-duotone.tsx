import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextUnderlineIconFillDuotone = memo(
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
          d="M19 20.5a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18 .5A1.5 1.5 0 0 1 19.5 2v9a7.5 7.5 0 0 1-14.99.386L4.5 11V2a1.5 1.5 0 1 1 3 0v9l.006.231A4.5 4.5 0 0 0 16.5 11V2A1.5 1.5 0 0 1 18 .5"
        />
      </svg>
    ))
);
TextUnderlineIconFillDuotone.displayName = "TextUnderlineIconFillDuotone";
export { TextUnderlineIconFillDuotone };
