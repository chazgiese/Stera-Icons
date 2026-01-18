import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CirclePlaceholderIconBold = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11q0 .245-.01.488a10.95 10.95 0 0 1-1.66 5.342 11.05 11.05 0 0 1-3.5 3.5A10.95 10.95 0 0 1 12 23C5.925 23 1 18.075 1 12q0-.245.01-.488c.086-1.956.683-3.78 1.66-5.342a11.05 11.05 0 0 1 3.5-3.5A10.94 10.94 0 0 1 12 1M3.766 8.361a9 9 0 0 0-.728 2.809l9.791 9.79a9 9 0 0 0 2.809-.727zm-.485 5.88a9.02 9.02 0 0 0 6.477 6.477zm3.302-9.426a9 9 0 0 0-1.768 1.768l12.601 12.6a9 9 0 0 0 1.768-1.767zm4.587-1.777a9 9 0 0 0-2.809.728l11.872 11.872a9 9 0 0 0 .728-2.809zm9.548 6.72A9.02 9.02 0 0 0 14.24 3.28z"
        />
      </svg>
    ))
);
CirclePlaceholderIconBold.displayName = "CirclePlaceholderIconBold";
export { CirclePlaceholderIconBold };
