import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M8.187 13.366a1 1 0 0 1 1.932.518l-1.036 3.863a1 1 0 1 1-1.932-.517zM14.588 12.66a1 1 0 0 1 1.225.706l1.035 3.864a1 1 0 1 1-1.932.517l-1.035-3.863a1 1 0 0 1 .707-1.225M3.515 10.07a1 1 0 1 1 1.414 1.414L2.1 14.313a1 1 0 1 1-1.414-1.415zM19.071 10.07a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1-1.415 1.414l-2.828-2.829a1 1 0 0 1 0-1.414" />
        </g>
        <path
          fill="currentColor"
          d="M21.318 6.635a1.001 1.001 0 0 1 1.863.729C21.436 11.832 17.09 15 12 15 6.91 15 2.563 11.832.818 7.364a1.001 1.001 0 0 1 1.863-.729 10.004 10.004 0 0 0 18.637 0"
        />
      </svg>
    ))
);
EyeClosedIconLinetone.displayName = "EyeClosedIconLinetone";
export { EyeClosedIconLinetone };
