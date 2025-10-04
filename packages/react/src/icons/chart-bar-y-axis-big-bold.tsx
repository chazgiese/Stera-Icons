import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarYAxisBigBold = memo(
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
          d="M3 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.75 16A2.25 2.25 0 0 1 17 18.25v1.5A2.25 2.25 0 0 1 14.75 22h-7a2.25 2.25 0 0 1-2.25-2.25v-1.5a2.25 2.25 0 0 1 2.02-2.238L7.75 16zM7.7 18.005a.25.25 0 0 0-.2.245v1.5c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-7zM19.75 9A2.25 2.25 0 0 1 22 11.25v1.5A2.25 2.25 0 0 1 19.75 15h-12a2.25 2.25 0 0 1-2.25-2.25v-1.5A2.25 2.25 0 0 1 7.75 9zm-12 2a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25zM16.75 2A2.25 2.25 0 0 1 19 4.25v1.5A2.25 2.25 0 0 1 16.75 8h-9A2.25 2.25 0 0 1 5.5 5.75v-1.5A2.25 2.25 0 0 1 7.75 2zm-9 2a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h9a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartBarYAxisBigBold.displayName = "ChartBarYAxisBigBold";
export { ChartBarYAxisBigBold };
