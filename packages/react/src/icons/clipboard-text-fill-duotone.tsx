import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ClipboardTextIconFillDuotone = memo(
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
          d="M7.015 3Q7 3.123 7 3.25v1.5A2.25 2.25 0 0 0 9.25 7h5.5A2.25 2.25 0 0 0 17 4.75v-1.5q-.002-.026-.003-.053A2 2 0 0 0 16.985 3h.765A3.25 3.25 0 0 1 21 6.25v13.5A3.25 3.25 0 0 1 17.75 23H6.25A3.25 3.25 0 0 1 3 19.75V6.25A3.25 3.25 0 0 1 6.25 3zM8.5 13.75a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm0-3.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.5 13.75a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM15.5 10.25a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM14.75 1A2.25 2.25 0 0 1 17 3.25v1.5A2.25 2.25 0 0 1 14.75 7h-5.5A2.25 2.25 0 0 1 7 4.75v-1.5A2.25 2.25 0 0 1 9.25 1z"
        />
      </svg>
    ))
);
ClipboardTextIconFillDuotone.displayName = "ClipboardTextIconFillDuotone";
export { ClipboardTextIconFillDuotone };
