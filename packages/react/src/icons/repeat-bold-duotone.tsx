import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RepeatIconBoldDuotone = memo(
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
          d="M18.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L19.586 7H7a4 4 0 0 0-4 4v1.5a1 1 0 0 1-2 0V11a6 6 0 0 1 6-6h12.586l-1.293-1.293a1 1 0 0 1 0-1.414"
        />
        <path
          fill="currentColor"
          d="M22 10.5a1 1 0 0 1 1 1V13a6 6 0 0 1-6 6H4.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L4.414 17H17a4 4 0 0 0 4-4v-1.5a1 1 0 0 1 1-1"
          opacity={0.4}
        />
      </svg>
    ))
);
RepeatIconBoldDuotone.displayName = "RepeatIconBoldDuotone";
export { RepeatIconBoldDuotone };
