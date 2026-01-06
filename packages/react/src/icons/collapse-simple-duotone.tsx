import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleIconDuotone = memo(
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
          <path d="M8.25 15.75v1.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72zM20.47 2.47a.75.75 0 1 1 1.06 1.06l-4.72 4.72h-1.06V7.19z" />
        </g>
        <path
          fill="currentColor"
          d="M9 14.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-4.25H4a.75.75 0 0 1 0-1.5zM15 3.25a.75.75 0 0 1 .75.75v4.25H20a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
CollapseSimpleIconDuotone.displayName = "CollapseSimpleIconDuotone";
export { CollapseSimpleIconDuotone };
