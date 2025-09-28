import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandLeftBold = memo(
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
          d="M10.001 1c1.063 0 1.995.554 2.527 1.388A3 3 0 0 1 17.001 5v4.382a3 3 0 0 1 3.88-.774 3 3 0 0 1 1.142 4.02L20.857 15.6A9 9 0 0 1 3 14V7a3 3 0 0 1 4.001-2.826V4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v7.5a1 1 0 0 1-2 0V7a1 1 0 0 0-2 0v7a7 7 0 0 0 13.904 1.158q.01-.051.023-.101l.033-.099 1.222-3.116.064-.135.047-.092a1 1 0 0 0-1.778-.908l-.005.008-1.65 2.794a1 1 0 0 1-1.86-.509V5a1 1 0 0 0-2 0v6a1 1 0 0 1-2 0V4a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HandLeftBold.displayName = "HandLeftBold";
export { HandLeftBold };
