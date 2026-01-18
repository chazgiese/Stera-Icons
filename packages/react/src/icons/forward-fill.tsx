import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ForwardIconFill = memo(
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
          d="M12.617 3.076a1 1 0 0 1 1.09.217l8 8a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 12 20v-4.5h-1c-2.722 0-4.49 1.012-5.581 1.993a7.3 7.3 0 0 0-1.18 1.359 6 6 0 0 0-.317.537l-.008.016A1 1 0 0 1 2 19c0-3.798.619-6.558 2.51-8.299C6.21 9.14 8.727 8.6 12 8.514V4a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
ForwardIconFill.displayName = "ForwardIconFill";
export { ForwardIconFill };
