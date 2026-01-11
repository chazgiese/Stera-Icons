import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots0PercentIconFill = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m4.597 13.847a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3.183-4.511a2 2 0 0 0-2.88.057c-.331.385-1.42 1.84-2.39 3.145-.494.664-.969 1.306-1.32 1.782l-.422.574q-.076.101-.116.157l-.031.043-.008.01-.002.003a1 1 0 0 0 1.397 1.398l.004-.002.01-.008.042-.031.158-.116.574-.422c.476-.351 1.118-.826 1.782-1.32 1.306-.97 2.76-2.059 3.145-2.39l.057-.052a2 2 0 0 0 0-2.828M5.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.404 5.904a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.193 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeDots0PercentIconFill.displayName = "GaugeDots0PercentIconFill";
export { GaugeDots0PercentIconFill };
