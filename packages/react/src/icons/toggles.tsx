import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Toggles = memo(
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
          d="M16 12.75a4.75 4.75 0 1 1 0 9.5H8a4.75 4.75 0 1 1 0-9.5zm0 3a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M8 4.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 1.75a4.75 4.75 0 1 1 0 9.5H8a4.75 4.75 0 0 1 0-9.5zm-8 1.5a3.25 3.25 0 1 0 0 6.5h8a3.25 3.25 0 0 0 0-6.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Toggles.displayName = "Toggles";
export { Toggles };
