import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrollTextIconBoldDuotone = memo(
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
          d="M16.5 3a3 3 0 0 1 3 3v9h.75a2.25 2.25 0 0 1 2.25 2.25V18a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7.5H3.75A2.25 2.25 0 0 1 1.5 8.25V6a3 3 0 0 1 3-3zm-4.75 14a.25.25 0 0 0-.25.25V18c0 .351-.063.687-.174 1H19.5a1 1 0 0 0 1-1v-.75a.25.25 0 0 0-.25-.25zM7.326 5c.11.313.174.649.174 1v12a1 1 0 0 0 1 1l.103-.005A1 1 0 0 0 9.5 18v-.75A2.25 2.25 0 0 1 11.75 15h5.75V6a1 1 0 0 0-1-1zM4.5 5a1 1 0 0 0-1 1v2.25c0 .138.112.25.25.25H5.5V6a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.5 10.5a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM15 7a1 1 0 1 1 0 2h-5a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ScrollTextIconBoldDuotone.displayName = "ScrollTextIconBoldDuotone";
export { ScrollTextIconBoldDuotone };
