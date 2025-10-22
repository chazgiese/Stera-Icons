import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandLeftIconFilltone = memo(
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
          d="M10 1c1.063 0 1.995.554 2.527 1.388A3 3 0 0 1 17 5v4.382a2.998 2.998 0 0 1 5.022 3.246L20.856 15.6A9 9 0 0 1 3 14V7a3 3 0 0 1 4-2.826V4a3 3 0 0 1 3-3"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 1c1.063 0 1.995.554 2.527 1.388A3 3 0 0 1 17 5v4.382a2.998 2.998 0 0 1 5.022 3.246L20.856 15.6A9 9 0 0 1 3 14V7a3 3 0 0 1 4-2.826V4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v7.5a1 1 0 0 1-2 0V7a1 1 0 0 0-2 0v7a7 7 0 0 0 13.904 1.158 1 1 0 0 1 .023-.101l.033-.099 1.222-3.116.064-.135.047-.092a1 1 0 0 0-1.778-.908l-.005.008-1.65 2.794A1 1 0 0 1 15 13V5a1 1 0 0 0-2 0v6a1 1 0 0 1-2 0V4a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HandLeftIconFilltone.displayName = "HandLeftIconFilltone";
export { HandLeftIconFilltone };
