import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleIconLinetone = memo(
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
          d="M3.996 19.62c.172.124.487.247 1.212.314C5.929 20 6.894 20 8.271 20h7.458c1.377 0 2.341 0 3.062-.066.718-.066 1.034-.188 1.207-.311a1.001 1.001 0 0 0 1.093 1.672l-.152.099c-.569.331-1.24.464-1.965.53-.834.077-1.907.076-3.245.076H8.27c-1.338 0-2.412.001-3.246-.075-.725-.067-1.396-.2-1.965-.531l-.152-.1a1 1 0 0 0 1.088-1.674"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.366 2.396a4 4 0 0 1 3.267 0c.7.313 1.222.896 1.705 1.586.485.693 1.024 1.637 1.697 2.815l3.728 6.525c.664 1.162 1.198 2.094 1.545 2.856.346.757.58 1.496.498 2.253a4 4 0 0 1-1.63 2.808 1 1 0 0 1-1.173-1.619c.458-.332.754-.842.815-1.404.023-.21-.028-.545-.33-1.208-.3-.659-.777-1.497-1.46-2.693l-3.73-6.525C14.607 6.578 14.12 5.73 13.7 5.128c-.424-.605-.69-.82-.883-.906a2 2 0 0 0-1.634 0c-.193.087-.459.301-.882.906-.421.601-.907 1.45-1.6 2.662L4.97 14.315c-.683 1.196-1.161 2.034-1.461 2.693-.303.663-.352.998-.33 1.208.061.562.357 1.072.815 1.404a1 1 0 1 1-1.173 1.62 4 4 0 0 1-1.63-2.81c-.082-.756.153-1.495.498-2.252.348-.762.88-1.694 1.544-2.856l3.73-6.525c.673-1.178 1.211-2.122 1.697-2.815.482-.69 1.005-1.273 1.705-1.586"
        />
      </svg>
    ))
);
TriangleIconLinetone.displayName = "TriangleIconLinetone";
export { TriangleIconLinetone };
