import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandRightFilled = memo(
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
          d="M14.441 1c.908 0 1.687.782 1.687 1.8v8.625a.5.5 0 1 0 1 0V6.25l.009-.188c.089-.925.826-1.612 1.676-1.612.908 0 1.687.782 1.687 1.8v8.05c0 4.829-3.715 8.7-8.245 8.7-4.07 0-7.478-3.12-8.132-7.257l-.026-.097-1.335-3.584-.03-.065-.082-.167c-.36-.845-.054-1.847.703-2.307a1.59 1.59 0 0 1 1.1-.212c.474.081.92.379 1.188.867l.002.005 1.803 3.212a.5.5 0 0 0 .937-.245v-9.2c0-1.018.778-1.8 1.685-1.8.851 0 1.589.687 1.678 1.612l.009.188v6.9a.5.5 0 0 0 1 0V2.8c0-1.018.779-1.8 1.686-1.8"
        />
      </svg>
    ))
);
HandRightFilled.displayName = "HandRightFilled";
export { HandRightFilled };
