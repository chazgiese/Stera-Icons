import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines0PercentIconBold = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11 0 2.999-1.203 5.717-3.148 7.7a1 1 0 0 1-1.153.299q-.019-.008-.038-.018l-.072-.036a1 1 0 0 1-.225-.167l-.017-.02-2.1-2.1a1 1 0 0 1 1.413-1.414l1.371 1.371a8.95 8.95 0 0 0 1.912-4.615H19a1 1 0 0 1 0-2h1.943a8.95 8.95 0 0 0-1.914-4.618l-1.376 1.377a1 1 0 0 1-1.414-1.414l1.375-1.377a8.95 8.95 0 0 0-4.61-1.911v1.948a1 1 0 1 1-2 0v-1.95a8.96 8.96 0 0 0-4.62 1.913l1.377 1.377a1 1 0 0 1-1.414 1.414L4.97 7.846a8.96 8.96 0 0 0-1.913 4.618H5a1 1 0 1 1 0 2H3.057a8.97 8.97 0 0 0 2.579 5.364 1 1 0 0 1-1.414 1.414A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11"
        />
        <path
          fill="currentColor"
          d="M10.586 12.05a2 2 0 0 1 2.828 2.828l-.057.053c-.385.33-1.84 1.42-3.145 2.39-.664.493-1.306.967-1.782 1.319l-.574.421-.158.117-.042.031-.01.008-.003.002a1 1 0 0 1-1.399-1.398l.003-.004.008-.01.031-.042.116-.158.422-.573c.351-.476.826-1.118 1.32-1.782.97-1.306 2.059-2.76 2.39-3.146q.025-.029.052-.056"
        />
      </svg>
    ))
);
GaugeLines0PercentIconBold.displayName = "GaugeLines0PercentIconBold";
export { GaugeLines0PercentIconBold };
