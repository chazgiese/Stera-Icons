import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ClipboardIconFilled = memo(
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
          d="M14.75 1.25a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1z"
        />
        <path
          fill="currentColor"
          d="M17.75 3A3.25 3.25 0 0 1 21 6.25v13.5A3.25 3.25 0 0 1 17.75 23H6.25A3.25 3.25 0 0 1 3 19.75V6.25A3.25 3.25 0 0 1 6.25 3h.5v.75a2.5 2.5 0 0 0 2.5 2.5h5.5a2.5 2.5 0 0 0 2.5-2.5V3z"
        />
      </svg>
    ))
);
ClipboardIconFilled.displayName = "ClipboardIconFilled";
export { ClipboardIconFilled };
