import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DeleteIcon = memo(
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
          d="M15.47 8.47a.75.75 0 0 1 1.06 1.06L14.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L13 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L11.94 12 9.47 9.53a.75.75 0 1 1 1.06-1.06L13 10.94z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H9.217a4.75 4.75 0 0 1-4.027-2.232l-3.163-5.061a2.75 2.75 0 0 1 0-2.914l3.163-5.06A4.75 4.75 0 0 1 9.217 3.25zm-8.783 1.5a3.25 3.25 0 0 0-2.756 1.527L3.3 11.337a1.25 1.25 0 0 0 0 1.325l3.162 5.06a3.25 3.25 0 0 0 2.756 1.528H18A3.25 3.25 0 0 0 21.25 16V8A3.25 3.25 0 0 0 18 4.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DeleteIcon.displayName = "DeleteIcon";
export { DeleteIcon };
