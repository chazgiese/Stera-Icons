import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsLeftRightIconDuotone = memo(
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
          <path d="M20.5 16.75a.75.75 0 0 1 0 1.5H4.31l-.75-.75.75-.75zM20.44 7.5l-.75.75H3.5a.75.75 0 0 1 0-1.5h16.19z" />
        </g>
        <path
          fill="currentColor"
          d="M5.97 12.97a.75.75 0 1 1 1.06 1.06L3.56 17.5l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06zM16.97 2.97a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ArrowsLeftRightIconDuotone.displayName = "ArrowsLeftRightIconDuotone";
export { ArrowsLeftRightIconDuotone };
