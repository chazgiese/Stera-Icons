import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaveTriangleIconBold = memo(
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
          d="M5.013 4.195c.846-1.593 3.129-1.593 3.975 0l7.792 14.668a.25.25 0 0 0 .441 0l3.896-7.332a1 1 0 1 1 1.766.938l-3.895 7.332c-.846 1.593-3.129 1.593-3.975 0l-3.895-7.332-.005-.01L7.22 5.134a.25.25 0 0 0-.441 0l-3.897 7.335a1 1 0 1 1-1.766-.937z"
        />
      </svg>
    ))
);
WaveTriangleIconBold.displayName = "WaveTriangleIconBold";
export { WaveTriangleIconBold };
