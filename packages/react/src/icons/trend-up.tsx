import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrendUpIcon = memo(
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
          d="M22.5 4.25q.067 0 .13.012.01 0 .018.003.02.005.04.011.05.012.098.03a.75.75 0 0 1 .362.324q.025.04.044.083A.8.8 0 0 1 23.25 5v6a.75.75 0 0 1-1.5 0V6.81l-8.22 8.22a.75.75 0 0 1-1.06 0L9.5 12.06l-7.47 7.47a.75.75 0 0 1-1.06-1.06l8-8 .114-.094a.75.75 0 0 1 .946.094L13 13.44l7.69-7.69H16.5a.75.75 0 1 1 0-1.5z"
        />
      </svg>
    ))
);
TrendUpIcon.displayName = "TrendUpIcon";
export { TrendUpIcon };
