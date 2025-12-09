import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BirdhouseIcon = memo(
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
          d="M12 9.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.506 3.325a2.25 2.25 0 0 1 2.99 0l8.002 7.115a.75.75 0 0 1-.996 1.12l-.967-.86-1.628 8.55H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h1.094L4.465 10.7l-.967.86a.75.75 0 0 1-.996-1.12zM12.5 4.446a.75.75 0 0 0-.996 0L5.771 9.54l1.85 9.71h8.76l1.848-9.71z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BirdhouseIcon.displayName = "BirdhouseIcon";
export { BirdhouseIcon };
