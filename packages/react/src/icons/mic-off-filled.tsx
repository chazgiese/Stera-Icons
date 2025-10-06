import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MicOffFilled = memo(
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
          d="M4 10a1 1 0 0 1 1 1 7 7 0 0 0 9.133 6.668l1.544 1.544a9 9 0 0 1-2.677.73V21h2a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2h2v-1.058c-4.5-.497-8-4.31-8-8.942a1 1 0 0 1 1-1M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 1 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        />
        <path
          fill="currentColor"
          d="M12.444 15.979A5 5 0 0 1 7 11v-.466zM20 10a1 1 0 0 1 1 1 8.95 8.95 0 0 1-1.498 4.967l-1.451-1.451A6.96 6.96 0 0 0 19 11a1 1 0 0 1 1-1M12 1a5 5 0 0 1 5 5v5c0 .724-.156 1.411-.432 2.032L7.453 3.918A5 5 0 0 1 12 1"
        />
      </svg>
    ))
);
MicOffFilled.displayName = "MicOffFilled";
export { MicOffFilled };
