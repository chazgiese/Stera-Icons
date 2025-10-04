import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarBigBold = memo(
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
          d="M5.75 5A2.25 2.25 0 0 1 8 7.25v12.5A2.25 2.25 0 0 1 5.75 22h-1.5A2.25 2.25 0 0 1 2 19.75V7.25A2.25 2.25 0 0 1 4.25 5zm-1.5 2a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V7.25A.25.25 0 0 0 5.75 7zM12.75 2A2.25 2.25 0 0 1 15 4.25v15.5A2.25 2.25 0 0 1 12.75 22h-1.5A2.25 2.25 0 0 1 9 19.75V4.25A2.25 2.25 0 0 1 11.25 2zm-1.5 2a.25.25 0 0 0-.25.25v15.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25zM19.75 8A2.25 2.25 0 0 1 22 10.25v9.5A2.25 2.25 0 0 1 19.75 22h-1.5A2.25 2.25 0 0 1 16 19.75v-9.5A2.25 2.25 0 0 1 18.25 8zm-1.5 2a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartBarBigBold.displayName = "ChartBarBigBold";
export { ChartBarBigBold };
