import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HourglassFilled = memo(
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
          d="M17 1a3 3 0 0 1 3 3v1.116a7 7 0 0 1-2.627 5.466l-1.284 1.027a.5.5 0 0 0 0 .782l1.284 1.027A7 7 0 0 1 20 18.884V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.116a7 7 0 0 1 2.627-5.466l1.284-1.027a.5.5 0 0 0 0-.782l-1.284-1.027A7 7 0 0 1 4 5.116V4a3 3 0 0 1 3-3zM9.438 5.568a1.5 1.5 0 0 0-.937 2.671l1.284 1.028c.819.655 1.465 1.655 1.465 2.727q-.001 1.54-.445 3.08l-2.866 2.865A1.5 1.5 0 0 0 9 20.5h6a1.5 1.5 0 0 0 1.06-2.56l-2.866-2.867a11 11 0 0 1-.444-3.079c0-1.073.646-2.072 1.465-2.727l1.284-1.028a1.5 1.5 0 0 0-.82-2.666l-.117-.005z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HourglassFilled.displayName = "HourglassFilled";
export { HourglassFilled };
