import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OverlappingCirclesIconBold = memo(
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
          d="M15.5 4.5A7.5 7.5 0 1 1 12 18.633a7.5 7.5 0 1 1 0-13.267 7.47 7.47 0 0 1 3.5-.866m-7 2a5.5 5.5 0 1 0 1.645 10.749A7.48 7.48 0 0 1 8 12c0-2.044.818-3.897 2.145-5.25A5.5 5.5 0 0 0 8.5 6.5m7 0c-.573 0-1.126.087-1.646.25A7.48 7.48 0 0 1 16 12c0 2.044-.82 3.896-2.145 5.249A5.5 5.5 0 1 0 15.5 6.5M12 7.757A5.49 5.49 0 0 0 10 12c0 1.708.779 3.233 2 4.242A5.49 5.49 0 0 0 14 12a5.49 5.49 0 0 0-2-4.243"
          clipRule="evenodd"
        />
      </svg>
    ))
);
OverlappingCirclesIconBold.displayName = "OverlappingCirclesIconBold";
export { OverlappingCirclesIconBold };
