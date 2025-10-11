import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparklesAltIconBold = memo(
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
          d="M7.5 10a1 1 0 0 1 .957.709l.041.135a7 7 0 0 0 4.658 4.658l.135.041a1 1 0 0 1 0 1.914l-.135.041a7 7 0 0 0-4.658 4.658l-.041.135a1 1 0 0 1-1.914 0l-.041-.135a7 7 0 0 0-4.658-4.658l-.135-.041a1 1 0 0 1 0-1.914l.135-.041a7 7 0 0 0 4.658-4.658l.041-.135A1 1 0 0 1 7.5 10m0 3.473A9 9 0 0 1 4.473 16.5 9 9 0 0 1 7.5 19.526a9 9 0 0 1 3.026-3.026A9 9 0 0 1 7.5 13.473M16.5 1a1 1 0 0 1 .957.709l.041.135a7 7 0 0 0 4.658 4.658l.135.041a1 1 0 0 1 0 1.914l-.135.041a7 7 0 0 0-4.658 4.658l-.041.135a1 1 0 0 1-1.914 0l-.041-.135a7 7 0 0 0-4.658-4.658l-.135-.041a1 1 0 0 1 0-1.914l.135-.041a7 7 0 0 0 4.658-4.658l.041-.135A1 1 0 0 1 16.5 1m0 3.473A9 9 0 0 1 13.473 7.5a9 9 0 0 1 3.027 3.026A9 9 0 0 1 19.526 7.5 9 9 0 0 1 16.5 4.473"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparklesAltIconBold.displayName = "SparklesAltIconBold";
export { SparklesAltIconBold };
