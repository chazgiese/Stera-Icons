import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineUpIconDuotone = memo(
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
          d="M20 2.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="m12 6.25.076.004.055.008.018.003q.02.005.039.011.05.012.098.03a.8.8 0 0 1 .244.164l7 7a.75.75 0 1 1-1.06 1.06l-5.72-5.72V21a.75.75 0 0 1-1.5 0V8.81l-5.72 5.72a.75.75 0 0 1-1.06-1.06l7-7a.8.8 0 0 1 .16-.12q.037-.023.078-.041l.01-.004q.046-.018.094-.029.019-.006.039-.011l.016-.003A1 1 0 0 1 12 6.25"
        />
      </svg>
    ))
);
ArrowLineUpIconDuotone.displayName = "ArrowLineUpIconDuotone";
export { ArrowLineUpIconDuotone };
