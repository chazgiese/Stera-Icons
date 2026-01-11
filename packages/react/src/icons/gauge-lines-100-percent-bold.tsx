import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines100PercentIconBold = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11 0 3.037-1.232 5.789-3.222 7.778a1 1 0 0 1-1.414-1.414 8.97 8.97 0 0 0 2.58-5.364H19a1 1 0 1 1 0-2h1.943a8.95 8.95 0 0 0-1.914-4.618l-1.376 1.377a1 1 0 0 1-1.414-1.414l1.375-1.377a8.96 8.96 0 0 0-4.61-1.911v1.948a1 1 0 1 1-2 0v-1.95a8.96 8.96 0 0 0-4.62 1.913l1.377 1.377a1 1 0 0 1-1.414 1.414L4.97 7.846a8.96 8.96 0 0 0-1.913 4.618H5a1 1 0 1 1 0 2H3.057a8.95 8.95 0 0 0 1.91 4.614l1.373-1.37a1 1 0 1 1 1.414 1.414l-2.102 2.1-.016.02a1 1 0 0 1-1.488-.078A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11"
        />
        <path
          fill="currentColor"
          d="M10.586 12.05a2 2 0 0 1 2.828 0l.053.056c.33.386 1.42 1.84 2.39 3.145a644 644 0 0 1 1.74 2.355l.117.159.031.042.008.01.002.004a1 1 0 0 1-1.397 1.399v-.001l-.005-.002-.01-.008-.041-.031-.158-.117-.573-.421c-.476-.352-1.119-.826-1.783-1.32-1.306-.97-2.76-2.06-3.145-2.39l-.057-.052a2 2 0 0 1 0-2.828"
        />
      </svg>
    ))
);
GaugeLines100PercentIconBold.displayName = "GaugeLines100PercentIconBold";
export { GaugeLines100PercentIconBold };
