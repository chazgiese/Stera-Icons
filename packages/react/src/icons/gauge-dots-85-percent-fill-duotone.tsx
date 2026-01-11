import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots85PercentIconFillDuotone = memo(
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
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25M7.404 15.097a1.5 1.5 0 1 0 0 3.001 1.5 1.5 0 0 0 0-3.001m9.193 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 10a2 2 0 1 0 .077 3.997c.506-.039 2.305-.297 3.914-.534a666 666 0 0 0 2.897-.435l.194-.029.052-.008.012-.002h.005a1 1 0 0 0 0-1.977l-.005-.001-.012-.002-.052-.008-.194-.03a787 787 0 0 0-2.897-.434c-1.61-.237-3.408-.495-3.914-.534zm-6.5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m1.904-4.596a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.193 0a1.5 1.5 0 1 0-.001 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.404 15.097a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.597 15.097a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 0-3M12.077 10.003c.506.039 2.305.297 3.914.534a666 666 0 0 1 2.897.435l.194.029.052.008.012.002h.004a1 1 0 0 1 .001 1.977l-.005.001-.012.002-.052.008-.194.03a787 787 0 0 1-2.897.434c-1.61.237-3.408.495-3.914.534L12 14a2 2 0 0 1 0-4zM5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.404 5.904a1.5 1.5 0 1 1 0 3.001 1.5 1.5 0 0 1 0-3M16.597 5.904a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
GaugeDots85PercentIconFillDuotone.displayName =
  "GaugeDots85PercentIconFillDuotone";
export { GaugeDots85PercentIconFillDuotone };
