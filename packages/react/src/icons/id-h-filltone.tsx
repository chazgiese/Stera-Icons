import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const IdHIconFilltone = memo(
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
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M8.33 7.5a3 3 0 0 1 3 3c0 .992-.485 1.869-1.228 2.415a4.01 4.01 0 0 1 2 2.252 1 1 0 0 1-.943 1.333H5.5a1 1 0 0 1-.942-1.333 4.01 4.01 0 0 1 1.997-2.252A3 3 0 0 1 5.329 10.5a3 3 0 0 1 3-3M19 13a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2zM19 9a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
IdHIconFilltone.displayName = "IdHIconFilltone";
export { IdHIconFilltone };
