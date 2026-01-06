import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrickWallIconDuotone = memo(
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
          d="M7.75 4.75v3.833h8.5V4.75h1.5v3.833h3.5v1.5h-8.5v3.834h8.5v1.5h-3.5v3.833h-1.5v-3.833h-8.5v3.833h-1.5v-3.833h-3.5v-1.5h8.5v-3.834h-8.5v-1.5h3.5V4.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 3.25A2.75 2.75 0 0 1 22.75 6v12A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18V6A2.75 2.75 0 0 1 4 3.25zM4 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BrickWallIconDuotone.displayName = "BrickWallIconDuotone";
export { BrickWallIconDuotone };
