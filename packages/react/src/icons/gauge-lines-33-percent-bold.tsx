import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines33PercentIconBold = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11 0 2.997-1.201 5.714-3.145 7.697a1 1 0 0 1-1.491.081l-.017-.02-2.1-2.1a1 1 0 1 1 1.413-1.414l1.371 1.371a8.95 8.95 0 0 0 1.912-4.615H19a1 1 0 1 1 0-2h1.943a8.95 8.95 0 0 0-1.914-4.618l-1.376 1.377a1 1 0 0 1-1.414-1.414l1.375-1.377a8.96 8.96 0 0 0-4.61-1.911v1.948a1 1 0 1 1-2 0v-1.95a9 9 0 0 0-7.947 7.945H5a1 1 0 1 1 0 2H3.057a8.95 8.95 0 0 0 1.91 4.614l1.373-1.37a1 1 0 1 1 1.414 1.414l-2.102 2.1-.016.02a1 1 0 0 1-1.488-.078A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11"
        />
        <path
          fill="currentColor"
          d="M6.343 7.807a1 1 0 0 1 1.299-.099v.001l.004.002.01.008.042.031.158.116a777 777 0 0 1 2.356 1.741c1.306.97 2.76 2.06 3.145 2.39q.03.026.057.053a2 2 0 0 1-2.828 2.828l-.053-.057c-.33-.385-1.42-1.84-2.39-3.145-.493-.664-.968-1.306-1.319-1.782-.175-.239-.32-.437-.422-.574l-.116-.158-.031-.042-.008-.01-.002-.004a1 1 0 0 1 .098-1.3"
        />
      </svg>
    ))
);
GaugeLines33PercentIconBold.displayName = "GaugeLines33PercentIconBold";
export { GaugeLines33PercentIconBold };
