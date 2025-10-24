import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDashIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M3.128 16.725a1 1 0 0 1 1.388.274A9.1 9.1 0 0 0 7 19.484a1 1 0 0 1-1.112 1.662 11.1 11.1 0 0 1-3.034-3.035 1 1 0 0 1 .274-1.386M19.485 17a1 1 0 0 1 1.662 1.111 11.1 11.1 0 0 1-3.034 3.035A1 1 0 1 1 17 19.484a9.1 9.1 0 0 0 2.485-2.485M5.888 2.853A1 1 0 1 1 7 4.515a9.1 9.1 0 0 0-2.484 2.484 1 1 0 0 1-1.662-1.112 11.1 11.1 0 0 1 3.034-3.034M16.726 3.127a1 1 0 0 1 1.387-.274c1.199.802 2.23 1.835 3.034 3.034a1 1 0 1 1-1.662 1.112A9.1 9.1 0 0 0 17 4.515a1 1 0 0 1-.274-1.388" />
        </g>
        <path
          fill="currentColor"
          d="M13.758 20.83a1 1 0 1 1 .388 1.961A11 11 0 0 1 12 23q-1.1-.002-2.146-.209a1 1 0 0 1 .388-1.962Q11.096 21 12 21q.904-.002 1.758-.17M1.209 9.854a1 1 0 0 1 1.962.388A9 9 0 0 0 3 12q.002.904.17 1.758a1 1 0 1 1-1.961.388A11 11 0 0 1 1 12q.002-1.1.209-2.146M21.615 9.067a1 1 0 0 1 1.176.787Q22.998 10.9 23 12q-.002 1.1-.209 2.146a1 1 0 0 1-1.962-.388Q21 12.904 21 12q-.002-.904-.17-1.758a1 1 0 0 1 .785-1.175M12 1q1.1.002 2.146.209a1 1 0 0 1-.388 1.962A9 9 0 0 0 12 3q-.904.002-1.758.17a1 1 0 1 1-.388-1.961A11 11 0 0 1 12 1"
        />
      </svg>
    ))
);
CircleDashIconLinetone.displayName = "CircleDashIconLinetone";
export { CircleDashIconLinetone };
