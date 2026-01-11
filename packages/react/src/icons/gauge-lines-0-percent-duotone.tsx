import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines0PercentIconDuotone = memo(
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
          d="M12 2.714c5.937 0 10.75 4.813 10.75 10.75 0 2.937-1.18 5.599-3.089 7.538a.749.749 0 0 1-.733.27q-.01-.004-.02-.006a.74.74 0 0 1-.367-.2l-.018-.02-2.1-2.1a.75.75 0 1 1 1.06-1.061l1.566 1.565a9.2 9.2 0 0 0 2.168-5.236H19a.75.75 0 0 1 0-1.5h2.217a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.572a.75.75 0 0 1-1.061-1.06l1.57-1.572a9.2 9.2 0 0 0-5.231-2.167V6.47a.75.75 0 0 1-1.5 0V4.246a9.2 9.2 0 0 0-5.241 2.168l1.57 1.571a.75.75 0 0 1-1.06 1.06l-1.572-1.57a9.2 9.2 0 0 0-2.169 5.239H5a.75.75 0 0 1 0 1.5H2.783a9.22 9.22 0 0 0 2.676 5.79.75.75 0 0 1-1.06 1.061 10.72 10.72 0 0 1-3.149-7.601c0-5.937 4.813-10.75 10.75-10.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.762 12.227a1.75 1.75 0 1 1 2.475 2.474l-.042.04c-.376.322-1.82 1.404-3.13 2.378-.665.494-1.308.968-1.784 1.32l-.572.42-.159.118-.051.038-.004.002h-.001l-.116.072a.75.75 0 0 1-.932-1.12h.001l.002-.004.038-.052.117-.158.421-.572c.351-.476.826-1.12 1.32-1.783.974-1.312 2.056-2.755 2.378-3.131z"
        />
      </svg>
    ))
);
GaugeLines0PercentIconDuotone.displayName = "GaugeLines0PercentIconDuotone";
export { GaugeLines0PercentIconDuotone };
