import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparklesAltFilled = memo(
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
          d="M7.5 10a1 1 0 0 1 .957.709l.041.135a7 7 0 0 0 4.658 4.658l.135.041a1 1 0 0 1 0 1.914l-.135.041a7 7 0 0 0-4.658 4.658l-.041.135a1 1 0 0 1-1.914 0l-.041-.135a7 7 0 0 0-4.658-4.658l-.135-.041a1 1 0 0 1 0-1.914l.135-.041a7 7 0 0 0 4.658-4.658l.041-.135A1 1 0 0 1 7.5 10M16.5 1a1 1 0 0 1 .957.709l.041.135a7 7 0 0 0 4.658 4.658l.135.041a1 1 0 0 1 0 1.914l-.135.041a7 7 0 0 0-4.658 4.658l-.041.135a1 1 0 0 1-1.914 0l-.041-.135a7 7 0 0 0-4.658-4.658l-.135-.041a1 1 0 0 1 0-1.914l.135-.041a7 7 0 0 0 4.658-4.658l.041-.135A1 1 0 0 1 16.5 1"
        />
      </svg>
    ))
);
SparklesAltFilled.displayName = "SparklesAltFilled";
export { SparklesAltFilled };
