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
        <g fill="currentColor" opacity={0.32}>
          <path d="M20 10a1 1 0 0 1 1 1c0 4.633-3.5 8.445-8 8.942V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.058c-4.5-.497-8-4.31-8-8.942a1 1 0 1 1 2 0 7 7 0 1 0 14 0 1 1 0 0 1 1-1" />
          <path d="M12 1a5 5 0 0 1 5 5v5a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5" />
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
