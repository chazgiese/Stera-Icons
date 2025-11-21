import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIconFilltone = memo(
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
          <path d="M17.095 17.2a1.5 1.5 0 0 1-2.912.72l-.624-2.518a12.4 12.4 0 0 0 2.91-.727zM7.144 14.52c.911.384 1.877.665 2.884.825l-.716 2.482a1.5 1.5 0 0 1-2.882-.832zM2.33 10.92a12.6 12.6 0 0 0 2.164 2.077l-1.79 1.87a1.5 1.5 0 0 1-2.167-2.076zM23.508 12.738a1.5 1.5 0 0 1-2.156 2.086l-1.802-1.862a12.6 12.6 0 0 0 2.154-2.088z" />
        </g>
        <path
          fill="currentColor"
          d="M20.852 6.454a1.5 1.5 0 0 1 2.795 1.092C21.83 12.2 17.302 15.5 12 15.5S2.17 12.2.352 7.546a1.501 1.501 0 0 1 2.795-1.092 9.505 9.505 0 0 0 17.705 0"
        />
      </svg>
    ))
);
EyeClosedIconFilltone.displayName = "EyeClosedIconFilltone";
export { EyeClosedIconFilltone };
