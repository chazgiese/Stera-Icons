import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines50PercentIcon = memo(
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
          d="M12 2.714c5.937 0 10.75 4.813 10.75 10.75 0 2.937-1.18 5.599-3.089 7.538a.749.749 0 0 1-.733.27q-.01-.004-.02-.006a.74.74 0 0 1-.367-.2l-.018-.02-2.1-2.1a.75.75 0 1 1 1.06-1.061l1.566 1.565a9.2 9.2 0 0 0 2.168-5.236H19a.75.75 0 0 1 0-1.5h2.217a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.572a.75.75 0 0 1-1.061-1.06l1.57-1.572A9.2 9.2 0 0 0 12 4.214a9.2 9.2 0 0 0-5.986 2.2l1.57 1.571a.75.75 0 0 1-1.06 1.06l-1.572-1.57a9.2 9.2 0 0 0-2.169 5.239H5a.75.75 0 0 1 0 1.5H2.783c.16 1.99.947 3.8 2.167 5.236l1.567-1.565a.75.75 0 1 1 1.06 1.06l-2.101 2.1-.017.02a.75.75 0 0 1-.361.199l-.027.008a.75.75 0 0 1-.733-.27 10.72 10.72 0 0 1-3.088-7.538c0-5.937 4.813-10.75 10.75-10.75"
        />
        <path
          fill="currentColor"
          d="M12 5.714a.75.75 0 0 1 .742.641l.01.064q.01.068.03.195l.106.702c.088.585.207 1.375.328 2.194.238 1.616.494 3.402.532 3.896q.003.03.002.058a1.75 1.75 0 0 1-3.5 0l.002-.058c.038-.494.294-2.28.532-3.896.12-.819.24-1.609.328-2.194l.107-.702.029-.195.01-.064v-.003l.033-.134A.75.75 0 0 1 12 5.714"
        />
      </svg>
    ))
);
GaugeLines50PercentIcon.displayName = "GaugeLines50PercentIcon";
export { GaugeLines50PercentIcon };
