import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const XIconDuotone = memo(
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
          <path d="m12 13.06-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12zM18.47 4.47a.75.75 0 1 1 1.06 1.06L13.06 12 12 10.94z" />
        </g>
        <path
          fill="currentColor"
          d="M4.47 4.47a.75.75 0 0 1 1.06 0l14 14a.75.75 0 1 1-1.06 1.06l-14-14a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
XIconDuotone.displayName = "XIconDuotone";
export { XIconDuotone };
