import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseIconBold = memo(
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
          d="M9 14a1.01 1.01 0 0 1 .835.45q.067.104.106.217l.015.04.016.062q.027.111.028.231v4a1 1 0 1 1-2 0v-1.586l-3.293 3.293a1 1 0 0 1-1.414-1.414L6.586 16H5a1 1 0 0 1 0-2zM19 14a1 1 0 0 1 0 2h-1.586l3.293 3.293a1 1 0 0 1-1.414 1.414L16 17.414V19a1 1 0 1 1-2 0v-4q0-.12.027-.231l.016-.062a1 1 0 0 1 .122-.257c.09-.137.214-.251.36-.33l.041-.02a1 1 0 0 1 .141-.057l.062-.016.034-.007.006-.001.089-.014Q14.948 14 15 14zM3.293 3.293a1 1 0 0 1 1.414 0L8 6.586V5a1 1 0 1 1 2 0v4a1 1 0 0 1-.031.24l-.013.051-.013.037a1 1 0 0 1-.533.582l-.025.012-.057.021q-.018.008-.037.013l-.05.013-.048.012-.021.002q-.034.007-.07.012L9 10H5a1 1 0 0 1 0-2h1.586L3.293 4.707a1 1 0 0 1 0-1.414M19.293 3.293a1 1 0 1 1 1.414 1.414L17.414 8H19a1 1 0 0 1 0 2h-4l-.102-.005q-.033-.004-.064-.01l-.031-.005-.047-.011-.049-.013q-.02-.007-.04-.015l-.052-.02-.026-.01a1 1 0 0 1-.421-.357 1 1 0 0 1-.125-.263l-.013-.05A1 1 0 0 1 14 9V5a1 1 0 0 1 2-.001v1.586z"
        />
      </svg>
    ))
);
CollapseIconBold.displayName = "CollapseIconBold";
export { CollapseIconBold };
