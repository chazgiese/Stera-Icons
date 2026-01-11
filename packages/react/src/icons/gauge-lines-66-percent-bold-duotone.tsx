import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines66PercentIconBoldDuotone = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11 0 2.999-1.203 5.717-3.148 7.7a1 1 0 0 1-1.153.299q-.019-.008-.038-.018l-.072-.036a1 1 0 0 1-.225-.167l-.017-.02-2.1-2.1a1 1 0 0 1 1.413-1.414l1.371 1.371a8.95 8.95 0 0 0 1.912-4.615H19a1 1 0 0 1 0-2h1.943a9 9 0 0 0-7.938-7.943v1.948a1 1 0 1 1-2 0v-1.95a8.96 8.96 0 0 0-4.62 1.913L7.76 7.809a1 1 0 0 1-1.414 1.414L4.97 7.846a8.96 8.96 0 0 0-1.913 4.618H5a1 1 0 1 1 0 2H3.057a8.95 8.95 0 0 0 1.91 4.614l1.373-1.37a1 1 0 1 1 1.414 1.414l-2.102 2.1-.016.02a1 1 0 0 1-.297.203q-.019.01-.038.018a1 1 0 0 1-1.154-.299A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.358 7.709a1 1 0 0 1 1.398 1.397l-.003.004-.008.01-.031.043-.116.158a625 625 0 0 1-1.741 2.354c-.97 1.306-2.06 2.76-2.39 3.146q-.026.03-.053.057a2 2 0 0 1-2.828-2.828l.057-.053c.385-.33 1.84-1.42 3.145-2.39a671 671 0 0 1 2.355-1.741l.158-.116.043-.032.01-.007z"
        />
      </svg>
    ))
);
GaugeLines66PercentIconBoldDuotone.displayName =
  "GaugeLines66PercentIconBoldDuotone";
export { GaugeLines66PercentIconBoldDuotone };
