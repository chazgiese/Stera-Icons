import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrainCircuitIconFilled = memo(
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
          d="M17 1.25a2.75 2.75 0 0 1 1 5.31V9a1 1 0 0 1-1 1h-4.25v2h4.69a2.748 2.748 0 0 1 5.31 1 2.75 2.75 0 0 1-5.31 1h-4.69v1h1.94a1 1 0 0 1 .867.5l1.029 1.784q.203-.032.414-.034a2.75 2.75 0 1 1-2.146 1.032L14.114 17H12.75v2.132c0 1.076-.35 2.465-1.596 3.101a4.75 4.75 0 0 1-6.885-3.81 4.75 4.75 0 0 1-1.504-7.9 4.251 4.251 0 0 1 2.634-6.129 4.244 4.244 0 0 1 5.476-2.916c1.467.502 1.875 2.072 1.875 3.207V8H16V6.56a2.748 2.748 0 0 1 1-5.31"
        />
      </svg>
    ))
);
BrainCircuitIconFilled.displayName = "BrainCircuitIconFilled";
export { BrainCircuitIconFilled };
