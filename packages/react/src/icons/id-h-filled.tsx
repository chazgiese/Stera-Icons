import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const IdHIconFilled = memo(
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
          d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM8.33 7.5a3 3 0 0 0-3 3c0 .992.483 1.869 1.225 2.415a4.01 4.01 0 0 0-1.997 2.252A1 1 0 0 0 5.5 16.5h5.658a1 1 0 0 0 .944-1.333 4.01 4.01 0 0 0-2-2.252A3 3 0 0 0 11.33 10.5a3 3 0 0 0-3-3M15 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
IdHIconFilled.displayName = "IdHIconFilled";
export { IdHIconFilled };
