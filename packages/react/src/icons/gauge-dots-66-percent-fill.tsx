import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots66PercentIconFill = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25M7.404 15.097a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.193 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m1.06-8.754a1 1 0 0 0-1.3-.098l-.003.002-.01.007-.042.031-.158.117-.574.422c-.476.351-1.118.825-1.782 1.319-1.306.97-2.76 2.06-3.145 2.39l-.057.052a2 2 0 0 0 2.828 2.83l.053-.058c.33-.385 1.42-1.839 2.39-3.145a652 652 0 0 0 1.74-2.356l.117-.158.031-.042.008-.01.053-.08c.235-.39.178-.896-.149-1.223M5.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.404 5.904a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeDots66PercentIconFill.displayName = "GaugeDots66PercentIconFill";
export { GaugeDots66PercentIconFill };
