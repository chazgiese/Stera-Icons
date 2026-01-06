import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpinnerIconDuotone = memo(
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
          <path d="M6.517 16.423a.75.75 0 0 1 1.06 1.06l-2.12 2.122a.751.751 0 0 1-1.062-1.06zM16.416 16.423a.75.75 0 0 1 1.06 0l2.122 2.121a.75.75 0 1 1-1.06 1.06l-2.122-2.12a.75.75 0 0 1 0-1.061M4.395 4.4a.75.75 0 0 1 1.06 0l2.121 2.12a.75.75 0 1 1-1.06 1.061l-2.121-2.12a.75.75 0 0 1 0-1.061M18.537 4.4a.75.75 0 0 1 1.06 1.06l-2.12 2.121a.751.751 0 0 1-1.062-1.06z" />
        </g>
        <path
          fill="currentColor"
          d="M12 18.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M5 11.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
SpinnerIconDuotone.displayName = "SpinnerIconDuotone";
export { SpinnerIconDuotone };
