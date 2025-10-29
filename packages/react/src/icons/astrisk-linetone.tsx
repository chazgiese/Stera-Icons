import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskIconLinetone = memo(
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
          <path d="M13 13.721V22a1 1 0 0 1-2 0v-8.274l1.004-.579zM2.481 6.496a1 1 0 0 1 1.367-.366L11 10.258v1.162l-.995.574-7.157-4.132a1 1 0 0 1-.367-1.366M20.163 6.13a1 1 0 0 1 1 1.732l-7.158 4.13-1.005-.58v-1.149z" />
        </g>
        <path
          fill="currentColor"
          d="M12 1a1 1 0 0 1 1 1v9.413l8.168 4.717a1 1 0 1 1-1 1.731l-8.164-4.713-8.161 4.713a1 1 0 0 1-1-1.731L11 11.42V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
AstriskIconLinetone.displayName = "AstriskIconLinetone";
export { AstriskIconLinetone };
