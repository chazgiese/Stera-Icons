import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots50PercentIconFillDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25M7.404 15.097a1.5 1.5 0 1 0 0 3.001 1.5 1.5 0 0 0 0-3.001m9.193 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1 1 0 0 0-.988.85l-.001.004-.002.012-.008.052-.03.194a851 851 0 0 0-.434 2.897c-.237 1.61-.495 3.408-.534 3.914L10 12a2 2 0 1 0 3.997-.077c-.039-.506-.297-2.305-.534-3.914a670 670 0 0 0-.435-2.897L13 4.918l-.008-.052-.002-.012v-.005A1 1 0 0 0 12 4m-6.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.404 5.903a1.5 1.5 0 1 0 .002 3.002 1.5 1.5 0 0 0-.002-3.002m9.193.001a1.5 1.5 0 1 0-.001 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 4a1 1 0 0 1 .988.848l.001.005.002.013.008.052.03.194a768 768 0 0 1 .434 2.897c.237 1.61.495 3.408.534 3.914Q14 11.96 14 12a2 2 0 0 1-4 0l.003-.077c.039-.506.297-2.305.534-3.914a667 667 0 0 1 .435-2.897L11 4.918l.008-.052.002-.013V4.85A1 1 0 0 1 12 4M7.404 15.097a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.597 15.097a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 0-3M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.404 5.903a1.501 1.501 0 1 1-.002 3.003 1.501 1.501 0 0 1 .002-3.003M16.597 5.904a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
GaugeDots50PercentIconFillDuotone.displayName =
  "GaugeDots50PercentIconFillDuotone";
export { GaugeDots50PercentIconFillDuotone };
