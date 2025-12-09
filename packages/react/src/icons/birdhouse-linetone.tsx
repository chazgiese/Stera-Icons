import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BirdhouseIconLinetone = memo(
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
          <path d="m5.791 19-1.49-7.82 1.742-1.547L7.828 19zM17.956 9.63l1.742 1.549L18.21 19h-2.037z" />
        </g>
        <path fill="currentColor" d="M19 19a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 9a3.5 3.5 0 1 1 0 7.001 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M10.34 3.139a2.5 2.5 0 0 1 3.322 0l8.002 7.114a1 1 0 0 1-1.328 1.494l-8.003-7.114a.5.5 0 0 0-.664 0l-8.005 7.114a1 1 0 0 1-1.328-1.494z"
        />
      </svg>
    ))
);
BirdhouseIconLinetone.displayName = "BirdhouseIconLinetone";
export { BirdhouseIconLinetone };
