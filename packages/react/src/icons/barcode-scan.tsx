import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarcodeScanIcon = memo(
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
          d="M2 14.25a.75.75 0 0 1 .75.75v2A2.25 2.25 0 0 0 5 19.25h2a.75.75 0 0 1 0 1.5H5A3.75 3.75 0 0 1 1.25 17v-2a.75.75 0 0 1 .75-.75M22 14.25a.75.75 0 0 1 .75.75v2A3.75 3.75 0 0 1 19 20.75h-2a.75.75 0 0 1 0-1.5h2A2.25 2.25 0 0 0 21.25 17v-2a.75.75 0 0 1 .75-.75M6 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25M10 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M14 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M18 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M7 3.25a.75.75 0 0 1 0 1.5H5A2.25 2.25 0 0 0 2.75 7v2a.75.75 0 0 1-1.5 0V7A3.75 3.75 0 0 1 5 3.25zM19 3.25A3.75 3.75 0 0 1 22.75 7v2a.75.75 0 0 1-1.5 0V7A2.25 2.25 0 0 0 19 4.75h-2a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
BarcodeScanIcon.displayName = "BarcodeScanIcon";
export { BarcodeScanIcon };
