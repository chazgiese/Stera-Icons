import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots0PercentIconBoldDuotone = memo(
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
          <path d="M16.597 15.097a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 0-3M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.404 5.904a1.5 1.5 0 1 1 0 3.001 1.5 1.5 0 0 1 0-3M16.597 5.904a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
          <path
            fillRule="evenodd"
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M10.586 10.586a2 2 0 1 1 2.828 2.828l-.056.053c-.386.33-1.84 1.42-3.146 2.39-.664.493-1.307.967-1.783 1.318l-.572.423-.159.116-.042.031-.01.008-.08.053a1 1 0 0 1-1.322-1.448l.003-.004.008-.011.03-.042.118-.158a888 888 0 0 1 1.74-2.356c.97-1.306 2.06-2.759 2.39-3.144q.026-.03.053-.057"
        />
      </svg>
    ))
);
GaugeDots0PercentIconBoldDuotone.displayName =
  "GaugeDots0PercentIconBoldDuotone";
export { GaugeDots0PercentIconBoldDuotone };
