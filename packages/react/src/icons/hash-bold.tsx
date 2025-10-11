import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashIconBold = memo(
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
          d="M15 2a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v4h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5h-4v5a1 1 0 1 1-2 0v-5H3a1 1 0 1 1 0-2h5v-4H3a1 1 0 0 1 0-2h5V3a1 1 0 0 1 2 0v5h4V3a1 1 0 0 1 1-1m-5 12h4v-4h-4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HashIconBold.displayName = "HashIconBold";
export { HashIconBold };
