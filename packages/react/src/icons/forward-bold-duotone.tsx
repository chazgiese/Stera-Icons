import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ForwardIconBoldDuotone = memo(
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
          d="M12 9.5a1 1 0 0 0 1 1c-3.734 0-5.878.517-7.136 1.674-.832.765-1.388 1.921-1.663 3.73C5.616 14.671 7.813 13.5 11 13.5h2a1 1 0 0 0-1 1v1h-1c-2.722 0-4.49 1.012-5.581 1.993a7.3 7.3 0 0 0-1.18 1.359 6 6 0 0 0-.317.537l-.008.016A1 1 0 0 1 2 19c0-3.798.618-6.558 2.51-8.299C6.21 9.14 8.727 8.6 12 8.514z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12.617 3.076a1 1 0 0 1 1.09.217l8 8a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 12 20v-5.5a1 1 0 0 1 2 0v3.086L19.586 12 14 6.414V9.5a1 1 0 0 1-2 0V4a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
ForwardIconBoldDuotone.displayName = "ForwardIconBoldDuotone";
export { ForwardIconBoldDuotone };
