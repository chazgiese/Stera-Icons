import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextSearchIconBold = memo(
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
          d="M15.5 9a4.5 4.5 0 0 1 3.94 6.673l1.944 1.943a1.25 1.25 0 0 1-1.768 1.768l-1.943-1.944A4.5 4.5 0 1 1 15.5 9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M8.103 17.005a1 1 0 0 1 0 1.99L8 19H3a1 1 0 1 1 0-2h5zM8.103 11.005a1 1 0 0 1 0 1.99L8 13H3a1 1 0 1 1 0-2h5zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
TextSearchIconBold.displayName = "TextSearchIconBold";
export { TextSearchIconBold };
