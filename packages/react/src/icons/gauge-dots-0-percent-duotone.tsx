import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots0PercentIconDuotone = memo(
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
          <path d="M16.597 15.347a1.25 1.25 0 1 1-.001 2.5 1.25 1.25 0 0 1 0-2.5M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.404 6.154a1.25 1.25 0 1 1 0 2.501 1.25 1.25 0 0 1 0-2.5M16.597 6.154a1.25 1.25 0 1 1-.001 2.501 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
          <path
            fillRule="evenodd"
            d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
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
GaugeDots0PercentIconDuotone.displayName = "GaugeDots0PercentIconDuotone";
export { GaugeDots0PercentIconDuotone };
