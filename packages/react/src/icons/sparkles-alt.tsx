import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparklesAltIcon = memo(
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
          d="M7.5 10.25a.75.75 0 0 1 .718.531l.04.136a7.25 7.25 0 0 0 4.825 4.824l.136.041a.75.75 0 0 1 0 1.436l-.136.04a7.25 7.25 0 0 0-4.824 4.825l-.041.136a.75.75 0 0 1-1.436 0l-.04-.136a7.25 7.25 0 0 0-4.825-4.824l-.136-.041a.75.75 0 0 1 0-1.436l.136-.04a7.25 7.25 0 0 0 4.824-4.825l.041-.136.045-.113a.75.75 0 0 1 .673-.418m0 2.72a8.75 8.75 0 0 1-3.53 3.53 8.75 8.75 0 0 1 3.53 3.53 8.75 8.75 0 0 1 3.53-3.53 8.75 8.75 0 0 1-3.53-3.53M16.5 1.25a.75.75 0 0 1 .718.531l.04.136a7.25 7.25 0 0 0 4.825 4.824l.136.041a.75.75 0 0 1 0 1.436l-.136.04a7.25 7.25 0 0 0-4.824 4.825l-.041.136a.75.75 0 0 1-1.436 0l-.04-.136a7.25 7.25 0 0 0-4.825-4.824l-.136-.041a.75.75 0 0 1 0-1.436l.136-.04a7.25 7.25 0 0 0 4.824-4.825l.041-.136.045-.113a.75.75 0 0 1 .673-.418m0 2.72a8.75 8.75 0 0 1-3.53 3.53 8.75 8.75 0 0 1 3.53 3.53 8.75 8.75 0 0 1 3.53-3.53 8.75 8.75 0 0 1-3.53-3.53"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparklesAltIcon.displayName = "SparklesAltIcon";
export { SparklesAltIcon };
