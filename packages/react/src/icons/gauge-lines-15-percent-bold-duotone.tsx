import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines15PercentIconBoldDuotone = memo(
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
          d="M12 2.464c6.075 0 11 4.925 11 11 0 2.999-1.203 5.717-3.148 7.7a1 1 0 0 1-1.153.299q-.019-.008-.038-.018l-.072-.036a1 1 0 0 1-.225-.167l-.017-.02-2.1-2.1a1 1 0 0 1 1.413-1.414l1.371 1.371a8.95 8.95 0 0 0 1.912-4.615H19a1 1 0 0 1 0-2h1.943a8.95 8.95 0 0 0-1.914-4.618l-1.376 1.377a1 1 0 0 1-1.414-1.414l1.375-1.377a8.95 8.95 0 0 0-4.61-1.911v1.948a1 1 0 1 1-2 0v-1.95a8.96 8.96 0 0 0-4.62 1.913l1.377 1.377a1 1 0 0 1-1.414 1.414L4.97 7.846A8.96 8.96 0 0 0 3 13.464c0 2.124.737 4.074 1.968 5.614l1.372-1.37a1 1 0 1 1 1.414 1.414l-2.102 2.1-.016.02a1 1 0 0 1-.297.203q-.019.01-.038.018a1 1 0 0 1-1.154-.299A10.97 10.97 0 0 1 1 13.464c0-6.075 4.925-11 11-11"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 11.464a2 2 0 1 1 0 4l-.077-.003c-.506-.039-2.305-.297-3.914-.534a664 664 0 0 1-2.897-.435q-.126-.019-.194-.03l-.052-.007-.012-.002H4.85a1 1 0 0 1-.001-1.977l.005-.001.012-.002.052-.008.194-.03.703-.106 2.194-.328c1.61-.237 3.408-.495 3.914-.534z"
        />
      </svg>
    ))
);
GaugeLines15PercentIconBoldDuotone.displayName =
  "GaugeLines15PercentIconBoldDuotone";
export { GaugeLines15PercentIconBoldDuotone };
