import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListContractIconDuotone = memo(
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
          <path d="M11 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM11 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM11 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M18 14.25c.198 0 .389.08.53.22l3 3a.75.75 0 0 1-1.06 1.06L18 16.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06l2.999-3a.75.75 0 0 1 .53-.22M20.47 5.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.061 0l-3-3a.75.75 0 1 1 1.061-1.06L18 7.94z"
        />
      </svg>
    ))
);
ListContractIconDuotone.displayName = "ListContractIconDuotone";
export { ListContractIconDuotone };
