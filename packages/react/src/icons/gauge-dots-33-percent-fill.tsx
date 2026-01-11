import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots33PercentIconFill = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25M7.404 15.097a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.193 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.642 6.244a1 1 0 0 0-1.448 1.322l.053.08.008.01.031.042.116.158a791 791 0 0 0 1.742 2.356c.97 1.306 2.06 2.76 2.39 3.145l.052.057a2 2 0 1 0 2.771-2.88c-.385-.33-1.839-1.42-3.145-2.39a658 658 0 0 0-2.356-1.742l-.158-.117-.042-.03-.01-.008-.003-.002zM5.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-1.903-4.596a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeDots33PercentIconFill.displayName = "GaugeDots33PercentIconFill";
export { GaugeDots33PercentIconFill };
