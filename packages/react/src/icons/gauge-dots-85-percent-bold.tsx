import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots85PercentIconBold = memo(
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
          d="M7.404 15.097a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.597 15.097a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 0-3M12.077 10.003c.506.039 2.305.297 3.914.534a666 666 0 0 1 2.897.435l.194.029.052.008.012.002h.004a1 1 0 0 1 .001 1.977l-.005.001-.012.002-.052.008-.194.03a787 787 0 0 1-2.897.434c-1.61.237-3.408.495-3.914.534L12 14a2 2 0 0 1 0-4zM5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.404 5.904a1.5 1.5 0 1 1 0 3.001 1.5 1.5 0 0 1 0-3M16.597 5.904a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeDots85PercentIconBold.displayName = "GaugeDots85PercentIconBold";
export { GaugeDots85PercentIconBold };
