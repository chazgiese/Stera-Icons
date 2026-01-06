import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleAltIconDuotone = memo(
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
          <path d="M15.75 15.75v1.06l4.72 4.72a.75.75 0 1 0 1.06-1.06l-4.72-4.72zM3.53 2.47a.75.75 0 1 0-1.06 1.06l4.72 4.72h1.06V7.19z" />
        </g>
        <path
          fill="currentColor"
          d="M15 14.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-4.25H20a.75.75 0 0 0 0-1.5zM9 3.25a.75.75 0 0 0-.75.75v4.25H4a.75.75 0 0 0 0 1.5h5A.75.75 0 0 0 9.75 9V4A.75.75 0 0 0 9 3.25"
        />
      </svg>
    ))
);
CollapseSimpleAltIconDuotone.displayName = "CollapseSimpleAltIconDuotone";
export { CollapseSimpleAltIconDuotone };
