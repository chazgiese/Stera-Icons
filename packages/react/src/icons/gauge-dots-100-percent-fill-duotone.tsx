import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots100PercentIconFillDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25M7.404 15.097a1.5 1.5 0 1 0 0 3.001 1.5 1.5 0 0 0 0-3.001m6.01-4.511a2 2 0 1 0-2.771 2.88c.385.331 1.84 1.42 3.145 2.39.664.494 1.306.969 1.782 1.32l.574.422q.101.076.157.116l.043.031.01.008.003.003a1.001 1.001 0 0 0 1.398-1.399l-.002-.003-.008-.011-.031-.042-.116-.158a950 950 0 0 0-1.742-2.356c-.97-1.306-2.059-2.759-2.39-3.144zM5.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.404 5.904a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.193 0a1.5 1.5 0 1 0-.001 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.404 15.097a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M10.586 10.586a2 2 0 0 1 2.828 0l.053.057c.33.385 1.42 1.838 2.39 3.144a659 659 0 0 1 1.74 2.356l.117.158.031.042.008.01.002.004a1 1 0 0 1-1.401 1.396l-.01-.008-.043-.031-.157-.116-.574-.422c-.476-.351-1.118-.826-1.782-1.32-1.306-.97-2.76-2.059-3.145-2.39l-.057-.052a2 2 0 0 1 0-2.828M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.404 5.904a1.5 1.5 0 1 1 0 3.001 1.5 1.5 0 0 1 0-3M16.597 5.904a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
GaugeDots100PercentIconFillDuotone.displayName =
  "GaugeDots100PercentIconFillDuotone";
export { GaugeDots100PercentIconFillDuotone };
