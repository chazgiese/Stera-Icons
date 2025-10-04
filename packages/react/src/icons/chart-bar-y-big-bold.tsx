import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarYBigBold = memo(
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
          d="M13.75 16A2.25 2.25 0 0 1 16 18.25v1.5A2.25 2.25 0 0 1 13.75 22h-9.5A2.25 2.25 0 0 1 2 19.75v-1.5A2.25 2.25 0 0 1 4.25 16zm-9.5 2a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25zM19.75 9A2.25 2.25 0 0 1 22 11.25v1.5A2.25 2.25 0 0 1 19.75 15H4.25A2.25 2.25 0 0 1 2 12.75v-1.5A2.25 2.25 0 0 1 4.25 9zm-15.5 2a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h15.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25zM16.75 2A2.25 2.25 0 0 1 19 4.25v1.5A2.25 2.25 0 0 1 16.75 8H4.25A2.25 2.25 0 0 1 2 5.75v-1.5A2.25 2.25 0 0 1 4.25 2zM4.25 4a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartBarYBigBold.displayName = "ChartBarYBigBold";
export { ChartBarYBigBold };
