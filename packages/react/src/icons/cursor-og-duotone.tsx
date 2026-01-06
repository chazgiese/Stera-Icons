import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorOgIconDuotone = memo(
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
          d="M11.599 15.668q.016.026.028.054l2.161 4.783 2.278-1.03-2.16-4.784q-.01-.022-.02-.046a.75.75 0 0 0 .802.482l.999-.134 2.056 4.549a.75.75 0 0 1-.375.992l-3.644 1.648a.75.75 0 0 1-.994-.375l-2.055-4.55.76-.66a.75.75 0 0 0 .164-.929"
          opacity={0.4}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m14.588 14.383 5.174-.692L7 2.449l.005 17.008 3.938-3.427"
        />
      </svg>
    ))
);
CursorOgIconDuotone.displayName = "CursorOgIconDuotone";
export { CursorOgIconDuotone };
