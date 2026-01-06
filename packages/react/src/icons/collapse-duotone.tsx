import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseIconDuotone = memo(
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
          <path d="M8.25 15.75v1.06l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72zM20.53 19.47a.75.75 0 1 1-1.06 1.06l-3.72-3.72v-1.06h1.06zM19.47 3.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72h-1.06V7.19zM3.47 3.47a.75.75 0 0 1 1.06 0l3.72 3.72v1.06H7.19L3.47 4.53a.75.75 0 0 1 0-1.06" />
        </g>
        <path
          fill="currentColor"
          d="M9 14.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-3.25H5a.75.75 0 0 1 0-1.5zM19 14.25a.75.75 0 0 1 0 1.5h-3.25V19a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75zM9 4.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h3.25V5A.75.75 0 0 1 9 4.25M15 4.25a.75.75 0 0 1 .75.75v3.25H19a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
CollapseIconDuotone.displayName = "CollapseIconDuotone";
export { CollapseIconDuotone };
