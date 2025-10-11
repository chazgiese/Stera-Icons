import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MicIcon = memo(
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
          d="M20 10.25a.75.75 0 0 1 .75.75c0 4.58-3.519 8.335-8 8.716v1.534H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.534c-4.481-.38-8-4.136-8-8.716a.75.75 0 0 1 1.5 0 7.25 7.25 0 1 0 14.5 0 .75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25A4.75 4.75 0 0 1 16.75 6v5a4.75 4.75 0 1 1-9.5 0V6A4.75 4.75 0 0 1 12 1.25m0 1.5A3.25 3.25 0 0 0 8.75 6v5a3.25 3.25 0 0 0 6.5 0V6A3.25 3.25 0 0 0 12 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MicIcon.displayName = "MicIcon";
export { MicIcon };
