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
          fill="currentColor"
          d="M6.691 1.766a.75.75 0 0 1 .805.12l12.762 11.242a.75.75 0 0 1-.397 1.307l-5.174.692a.75.75 0 0 1-.198-1.487l3.541-.475L7.75 4.11l.004 13.702 2.697-2.346a.75.75 0 1 1 .984 1.132l-3.938 3.425a.751.751 0 0 1-1.242-.565L6.25 2.45a.75.75 0 0 1 .441-.683"
        />
      </svg>
    ))
);
CursorOgIconDuotone.displayName = "CursorOgIconDuotone";
export { CursorOgIconDuotone };
