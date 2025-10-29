import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BoltIconFilltone = memo(
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
          d="M13.912 2c1.243 0 2.083-.01 2.854.233a5 5 0 0 1 1.772.994c.61.53 1.038 1.253 1.687 2.314l1.589 2.6c.703 1.152 1.19 1.922 1.379 2.771a5 5 0 0 1 0 2.176c-.19.849-.676 1.62-1.38 2.77l-1.588 2.6c-.648 1.062-1.077 1.785-1.687 2.315a5 5 0 0 1-1.772.994c-.771.244-1.611.233-2.854.233h-3.823c-1.243 0-2.083.01-2.854-.233a5 5 0 0 1-1.772-.994c-.61-.53-1.039-1.253-1.687-2.314l-1.59-2.6C1.485 14.706.998 13.936.809 13.087a5 5 0 0 1 0-2.176c.19-.849.676-1.62 1.379-2.77L3.776 5.54c.648-1.061 1.077-1.784 1.687-2.314a5 5 0 0 1 1.772-.994C8.006 1.99 8.845 2 10.089 2zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
      </svg>
    ))
);
BoltIconFilltone.displayName = "BoltIconFilltone";
export { BoltIconFilltone };
