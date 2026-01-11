import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines85PercentIconBold = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11 0 2.999-1.203 5.717-3.148 7.7a1 1 0 0 1-1.153.299q-.019-.008-.038-.018l-.072-.036a1 1 0 0 1-.225-.167l-.017-.02-2.1-2.1a1 1 0 0 1 1.413-1.414l1.371 1.371A8.96 8.96 0 0 0 21 13.464a8.96 8.96 0 0 0-1.97-5.618l-1.377 1.377a1 1 0 0 1-1.414-1.414l1.375-1.377a8.95 8.95 0 0 0-4.61-1.911v1.948a1 1 0 1 1-2 0v-1.95a8.96 8.96 0 0 0-4.62 1.913l1.377 1.377a1 1 0 0 1-1.414 1.414L4.97 7.846a8.96 8.96 0 0 0-1.913 4.618H5a1 1 0 1 1 0 2H3.057a8.95 8.95 0 0 0 1.91 4.614l1.373-1.37a1 1 0 1 1 1.414 1.414l-2.102 2.1-.016.02a1 1 0 0 1-.297.203q-.019.01-.038.018a1 1 0 0 1-1.154-.299A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11"
        />
        <path
          fill="currentColor"
          d="M12.077 11.467c.506.039 2.305.297 3.914.534a640 640 0 0 1 2.897.434l.194.03.052.008.012.002h.004a1 1 0 0 1-.003 1.978l-.013.002-.052.008-.194.03a567 567 0 0 1-2.897.434c-1.61.237-3.408.495-3.914.534l-.077.003a2 2 0 0 1 0-4z"
        />
      </svg>
    ))
);
GaugeLines85PercentIconBold.displayName = "GaugeLines85PercentIconBold";
export { GaugeLines85PercentIconBold };
