import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Home3dIconFill = memo(
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
          d="M8.5 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-.995-.898L6.5 16v-2a1 1 0 0 1 1-1z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.379 4a2.5 2.5 0 0 1 1.768.732l4.12 4.122A2.5 2.5 0 0 1 22 10.62V17.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-6.879a2.5 2.5 0 0 1 .732-1.767l4.122-4.122A2.5 2.5 0 0 1 8.62 4zM4.146 10.268A.5.5 0 0 0 4 10.62V17.5a.5.5 0 0 0 .5.5H12v-7.586l-4-4zM13.414 9h5.172l-2.854-2.854A.5.5 0 0 0 15.38 6h-4.965z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Home3dIconFill.displayName = "Home3dIconFill";
export { Home3dIconFill };
