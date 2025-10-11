import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SquareDashedIconFilled = memo(
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
          d="M3 16.5a1 1 0 0 1 1 1v.5a2 2 0 0 0 2 2h.5a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-.5a1 1 0 0 1 1-1M14 20a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM21 16.5a1 1 0 0 1 1 1v.5a4 4 0 0 1-4 4h-.5a1 1 0 1 1 0-2h.5a2 2 0 0 0 2-2v-.5a1 1 0 0 1 1-1M16 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM3.003 9.005a1 1 0 0 1 1 1l-.001 4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M21.003 9.005a1 1 0 0 1 1 1l-.001 4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1M6.5 2a1 1 0 0 1 0 2H6a2 2 0 0 0-2 2v.5a1 1 0 0 1-2 0V6a4 4 0 0 1 4-4zM18 2a4 4 0 0 1 4 4v.5a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2h-.5a1 1 0 1 1 0-2zM14 2a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
SquareDashedIconFilled.displayName = "SquareDashedIconFilled";
export { SquareDashedIconFilled };
