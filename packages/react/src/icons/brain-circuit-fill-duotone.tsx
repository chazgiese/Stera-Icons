import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrainCircuitIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M14.69 15a1 1 0 0 1 .867.5l1.029 1.784a2.74 2.74 0 0 0-1.732.998L14.114 17H12.75v-2zM17.44 12a2.74 2.74 0 0 0 0 2h-4.69v-2zM18 9a1 1 0 0 1-1 1h-4.25V8H16V6.56a2.739 2.739 0 0 0 2 0z" />
        </g>
        <path
          fill="currentColor"
          d="M9.5 1.25c.48 0 .943.08 1.375.228 1.467.502 1.875 2.072 1.875 3.207v14.447c0 1.076-.35 2.465-1.596 3.101a4.75 4.75 0 0 1-6.885-3.81 4.75 4.75 0 0 1-1.504-7.9 4.251 4.251 0 0 1 2.634-6.129A4.244 4.244 0 0 1 9.5 1.25M17 17.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M20 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M17 1.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5"
        />
      </svg>
    ))
);
BrainCircuitIconFillDuotone.displayName = "BrainCircuitIconFillDuotone";
export { BrainCircuitIconFillDuotone };
