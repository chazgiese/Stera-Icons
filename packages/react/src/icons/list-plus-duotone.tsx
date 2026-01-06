import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListPlusIconDuotone = memo(
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
          <path d="M9 15.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM9 10.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 9.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5m0 2a.75.75 0 0 0-.75.75v1.75H15a.75.75 0 0 0 0 1.5h1.75V17a.75.75 0 0 0 1.5 0v-1.75H20a.75.75 0 0 0 0-1.5h-1.75V12a.75.75 0 0 0-.75-.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ListPlusIconDuotone.displayName = "ListPlusIconDuotone";
export { ListPlusIconDuotone };
