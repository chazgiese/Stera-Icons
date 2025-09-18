import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LabelAlt = memo(
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
          d="M20.745 3.25c1.57 0 2.528 1.728 1.696 3.06l-3.142 5.028a1.25 1.25 0 0 0 0 1.324l3.142 5.028c.832 1.332-.125 3.06-1.696 3.06H7.11a2.75 2.75 0 0 1-2.332-1.293l-3.75-6a2.75 2.75 0 0 1 0-2.914l3.75-6A2.75 2.75 0 0 1 7.109 3.25zM7.11 4.75c-.431 0-.831.223-1.06.588l-3.75 6a1.25 1.25 0 0 0 0 1.324l3.75 6a1.25 1.25 0 0 0 1.06.588h13.636a.5.5 0 0 0 .424-.765l-3.142-5.028a2.75 2.75 0 0 1 0-2.914l3.142-5.028a.5.5 0 0 0-.424-.765z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LabelAlt.displayName = "LabelAlt";
export { LabelAlt };
