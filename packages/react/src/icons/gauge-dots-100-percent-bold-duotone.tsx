import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots100PercentIconBoldDuotone = memo(
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
          <path d="M7.404 15.097a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.404 5.904a1.5 1.5 0 1 1 0 3.001 1.5 1.5 0 0 1 0-3M16.597 5.904a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
          <path
            fillRule="evenodd"
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M10.586 10.585a2 2 0 0 1 2.828 0l.053.057c.33.385 1.42 1.84 2.39 3.145.493.664.967 1.307 1.318 1.783l.423.573.116.158.031.042.008.01.053.08a1 1 0 0 1-1.448 1.322l-.004-.002-.011-.008-.042-.031-.158-.117-.573-.422c-.476-.351-1.119-.825-1.783-1.318-1.305-.97-2.758-2.06-3.144-2.39l-.057-.053a2 2 0 0 1 0-2.829"
        />
      </svg>
    ))
);
GaugeDots100PercentIconBoldDuotone.displayName =
  "GaugeDots100PercentIconBoldDuotone";
export { GaugeDots100PercentIconBoldDuotone };
