import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PoundSterlingIconDuotone = memo(
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
          <path d="M7.75 12.75H5a.75.75 0 0 1 0-1.5h2.75zM14 11.25a.75.75 0 0 1 0 1.5H9.25v-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M12.015 2.154c2.313-.345 4.98.711 6.629 3.46a.75.75 0 0 1-1.287.772c-1.351-2.251-3.435-3-5.121-2.748C10.548 3.89 9.25 5.12 9.25 7v10c0 1.419-.867 2.515-1.704 3.25H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.296-1.44l.004-.001.023-.01.095-.045a8.125 8.125 0 0 0 1.46-.906c.83-.651 1.464-1.458 1.464-2.348V7c0-2.73 1.953-4.5 4.265-4.846"
        />
      </svg>
    ))
);
PoundSterlingIconDuotone.displayName = "PoundSterlingIconDuotone";
export { PoundSterlingIconDuotone };
