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
        <g fill="currentColor" opacity={0.4}>
          <path d="M7.937 14.294q.934.336 1.933.515l-.787 2.938a1 1 0 0 1-1.932-.517zM16.848 17.23a1 1 0 0 1-1.932.517l-.788-2.938q.998-.18 1.933-.515zM2.837 10.747q.648.766 1.415 1.413L2.1 14.313a1 1 0 0 1-1.415-1.415zM23.313 12.898a1 1 0 0 1-1.414 1.415l-2.152-2.153q.767-.647 1.415-1.413z" />
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
