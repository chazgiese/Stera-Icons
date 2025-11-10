import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Home3dIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M8.5 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-.995-.898L6.5 16v-2a1 1 0 0 1 1-1zM19.854 10.268a.5.5 0 0 1 .146.353V11h-6v-1a1 1 0 0 0-.293-.707L13.414 9h5.172z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.379 4a2.5 2.5 0 0 1 1.768.732l4.12 4.122A2.5 2.5 0 0 1 22 10.62V17.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-6.879a2.5 2.5 0 0 1 .732-1.767l4.122-4.122A2.5 2.5 0 0 1 8.62 4zm-1.672 5.293A1 1 0 0 1 14 10v8h5.5a.5.5 0 0 0 .5-.5v-6.879a.5.5 0 0 0-.146-.353l-4.122-4.122A.5.5 0 0 0 15.38 6h-4.965zm-9.56.975A.5.5 0 0 0 4 10.62V17.5a.5.5 0 0 0 .5.5H12v-7.586l-4-4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Home3dIconLinetone.displayName = "Home3dIconLinetone";
export { Home3dIconLinetone };
