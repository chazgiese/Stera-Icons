import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeHeartIconFilled = memo(
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
          fillRule="evenodd"
          d="M9.544 2.644a4 4 0 0 1 4.912 0l6 4.666A4 4 0 0 1 22 10.467V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.533c0-1.234.57-2.4 1.544-3.157zM13.904 10c-.845 0-1.573.497-1.904 1.211a2.1 2.1 0 0 0-1.904-1.21C8.939 10 8 10.93 8 12.075c0 .898.49 1.605.688 1.88C9.64 15.277 10.963 16.178 12 17c1.037-.822 2.36-1.723 3.313-3.044.198-.275.687-.982.687-1.88A2.087 2.087 0 0 0 13.904 10"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeHeartIconFilled.displayName = "HomeHeartIconFilled";
export { HomeHeartIconFilled };
