import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PaperclipIconDuotone = memo(
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
          d="M10.5 1.25a4.25 4.25 0 0 1 4.25 4.25V15a2.75 2.75 0 1 1-5.5 0V8a.75.75 0 0 1 1.5 0v7a1.25 1.25 0 1 0 2.5 0V5.5a2.75 2.75 0 0 0-2.75-2.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.5 2.75A2.75 2.75 0 0 0 7.75 5.5V17a4.25 4.25 0 0 0 8.5 0V8a.75.75 0 0 1 1.5 0v9a5.75 5.75 0 0 1-11.5 0V5.5a4.25 4.25 0 0 1 4.25-4.25z"
        />
      </svg>
    ))
);
PaperclipIconDuotone.displayName = "PaperclipIconDuotone";
export { PaperclipIconDuotone };
