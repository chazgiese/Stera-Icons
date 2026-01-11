import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines100PercentIconFill = memo(
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
          fillRule="evenodd"
          d="M12 2.464c6.075 0 11 4.925 11 11a10.97 10.97 0 0 1-3.222 7.778 1 1 0 0 1-.707.293H4.93c-.265 0-.52-.105-.707-.293A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11M7.754 17.709a1 1 0 0 0-1.414 0l-1.06 1.06a1 1 0 0 0 1.413 1.415l1.06-1.061a1 1 0 0 0 0-1.414m5.66-5.66a2 2 0 1 0-2.771 2.882c.385.33 1.84 1.42 3.145 2.39.664.493 1.307.967 1.783 1.319l.573.421.158.117.042.031.01.008.003.002h.001a1 1 0 0 0 1.397-1.398l-.002-.004-.008-.01-.031-.042-.116-.159-1.742-2.355c-.97-1.306-2.059-2.76-2.39-3.145zm-9.914.416a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zM6.7 6.749a1 1 0 1 0-1.414 1.414l1.06 1.06A1 1 0 0 0 7.762 7.81zm12.014 0a1 1 0 0 0-1.414 0l-1.06 1.06a1 1 0 0 0 1.413 1.415l1.06-1.06a1 1 0 0 0 0-1.415m-6.717-2.784A1 1 0 0 0 11 4.968l.005 1.505a1 1 0 0 0 2-.006L13 4.962a1 1 0 0 0-1.003-.997"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeLines100PercentIconFill.displayName = "GaugeLines100PercentIconFill";
export { GaugeLines100PercentIconFill };
