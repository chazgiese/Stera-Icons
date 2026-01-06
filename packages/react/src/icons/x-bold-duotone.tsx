import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const XIconBoldDuotone = memo(
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
          <path d="m12 13.414-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 12zM18.293 4.293a1 1 0 0 1 1.414 1.414L13.414 12 12 10.586z" />
        </g>
        <path
          fill="currentColor"
          d="M4.293 4.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
XIconBoldDuotone.displayName = "XIconBoldDuotone";
export { XIconBoldDuotone };
