import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MicOffIconFill = memo(
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
          d="M4 10a1 1 0 0 1 1 1 7 7 0 0 0 9.65 6.479l1.504 1.503a9 9 0 0 1-3.154.96V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.058c-4.5-.497-8-4.31-8-8.942a1 1 0 0 1 1-1M20 10a1 1 0 0 1 1 1c0 2.02-.666 3.882-1.79 5.383l-1.432-1.433A6.97 6.97 0 0 0 19 11a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M13.059 15.887A5 5 0 0 1 7 11V9.828zM12 1a5 5 0 0 1 5 5v5c0 .911-.246 1.764-.672 2.5L7.254 4.426A5 5 0 0 1 12 1M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
MicOffIconFill.displayName = "MicOffIconFill";
export { MicOffIconFill };
