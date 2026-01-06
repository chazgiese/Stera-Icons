import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineBottleLabelIconFillDuotone = memo(
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
          <path d="M16.25 21a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-1.5h8.5z" />
          <path
            fillRule="evenodd"
            d="M12.853 1.005A1 1 0 0 1 13.75 2v5.646A3.5 3.5 0 0 1 16.25 11v6.5h-8.5V11a3.5 3.5 0 0 1 2.5-3.354V2a1 1 0 0 1 1-1h1.5zM7.75 12v2h8.496v-2z"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M16.251 19.5H7.749v-2h8.502zM16.247 14H7.751v-2h8.496z"
        />
      </svg>
    ))
);
WineBottleLabelIconFillDuotone.displayName = "WineBottleLabelIconFillDuotone";
export { WineBottleLabelIconFillDuotone };
