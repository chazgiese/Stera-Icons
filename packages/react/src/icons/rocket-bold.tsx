import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RocketIconBold = memo(
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
          d="M12 7a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 12 7"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.574 1.095a1 1 0 0 1 .98.073C14.949 2.765 16.4 4.6 17.187 6.49c.425 1.02.648 2.037.73 3.014l2.79 2.789c.225.225.33.545.281.86l-1 6.5a1 1 0 0 1-1.518.695L14.714 18H9.286L5.53 20.348a1 1 0 0 1-1.518-.696l-1-6.5a1 1 0 0 1 .28-.86L6.08 9.507c.083-.978.306-1.995.731-3.016.788-1.89 2.239-3.725 4.634-5.322zm-6.51 12.253.693 4.499 1.898-1.187a14.461 14.461 0 0 1-1.47-4.432zm12.75-1.122a14.5 14.5 0 0 1-1.471 4.433l1.9 1.188.693-4.499zm-5.815-9.003C10.24 4.518 9.219 5.91 8.656 7.26c-.621 1.492-.71 2.998-.54 4.366.172 1.373.604 2.587.998 3.464.169.374.33.682.456.91h4.858c.126-.228.287-.536.456-.91.394-.877.826-2.091.998-3.464.17-1.368.082-2.874-.54-4.366-.562-1.35-1.584-2.742-3.343-4.037"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M10.5 19a1 1 0 0 0-1 1c0 .371.13.747.294 1.073.48.956 1.345 1.55 2.206 2.13.86-.58 1.727-1.174 2.206-2.13.164-.326.294-.702.294-1.073a1 1 0 0 0-1-1z"
        />
      </svg>
    ))
);
RocketIconBold.displayName = "RocketIconBold";
export { RocketIconBold };
