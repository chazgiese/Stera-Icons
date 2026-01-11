import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines50PercentIconBold = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11 0 2.999-1.203 5.717-3.148 7.7a1 1 0 0 1-1.153.299q-.019-.008-.038-.018l-.072-.036a1 1 0 0 1-.225-.167l-.017-.02-2.1-2.1a1 1 0 0 1 1.413-1.414l1.371 1.371a8.95 8.95 0 0 0 1.912-4.615H19a1 1 0 0 1 0-2h1.943a8.95 8.95 0 0 0-1.914-4.618l-1.376 1.377a1 1 0 0 1-1.414-1.414l1.375-1.377A8.96 8.96 0 0 0 12 4.464a8.96 8.96 0 0 0-5.615 1.968L7.76 7.809a1 1 0 0 1-1.414 1.414L4.97 7.846a8.96 8.96 0 0 0-1.913 4.618H5a1 1 0 1 1 0 2H3.057a8.95 8.95 0 0 0 1.91 4.614l1.373-1.37a1 1 0 1 1 1.414 1.414l-2.102 2.1-.016.02a1 1 0 0 1-.297.203q-.019.01-.038.018a1 1 0 0 1-1.154-.299A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11"
        />
        <path
          fill="currentColor"
          d="M12 5.464a1 1 0 0 1 .99.853l.001.013.008.052.03.194a844 844 0 0 1 .434 2.897c.237 1.61.495 3.408.534 3.914q.003.038.003.077a2 2 0 0 1-4 0l.003-.077c.039-.506.297-2.305.534-3.914a670 670 0 0 1 .435-2.897L11 6.382l.008-.052.002-.013v-.004a1 1 0 0 1 .989-.85"
        />
      </svg>
    ))
);
GaugeLines50PercentIconBold.displayName = "GaugeLines50PercentIconBold";
export { GaugeLines50PercentIconBold };
