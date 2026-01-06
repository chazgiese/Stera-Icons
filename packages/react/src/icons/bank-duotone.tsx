import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BankIconDuotone = memo(
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
          <path d="M18.75 17.25a2 2 0 0 1 2 2v1h-1.5v-1a.5.5 0 0 0-.5-.5H5.25a.5.5 0 0 0-.5.5v1h-1.5v-1a2 2 0 0 1 2-2z" />
          <path
            fillRule="evenodd"
            d="M11.682 2.321a.75.75 0 0 1 .734.055l9 6A.75.75 0 0 1 21 9.75H3a.75.75 0 0 1-.416-1.374l9-6zm-6.205 5.93h13.046L12 3.9z"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M13 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.75 17.25h-1.5v-7.5h1.5zM10.75 17.25h-1.5v-7.5h1.5zM14.75 17.25h-1.5v-7.5h1.5zM18.75 17.25h-1.5v-7.5h1.5zM21 20.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
BankIconDuotone.displayName = "BankIconDuotone";
export { BankIconDuotone };
