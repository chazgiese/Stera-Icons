import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MicOffIconFilltone = memo(
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
          <path d="M4 10a1 1 0 0 1 1 1 7 7 0 0 0 10.593 6.007l1.446 1.446A8.95 8.95 0 0 1 13 19.943V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.058c-4.5-.497-8-4.31-8-8.942a1 1 0 0 1 1-1M20 10a1 1 0 0 1 1 1 8.96 8.96 0 0 1-2.436 6.15l-1.413-1.413A6.97 6.97 0 0 0 19 11a1 1 0 0 1 1-1" />
          <path d="M14.116 15.53A5 5 0 0 1 7 11V8.414zM12 1a5 5 0 0 1 5 5v5a4.98 4.98 0 0 1-1.265 3.321L7.017 5.603A5 5 0 0 1 12 1" />
        </g>
        <path
          fill="currentColor"
          d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
MicOffIconFilltone.displayName = "MicOffIconFilltone";
export { MicOffIconFilltone };
