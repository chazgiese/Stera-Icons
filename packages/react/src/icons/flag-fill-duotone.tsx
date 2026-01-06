import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagIconFillDuotone = memo(
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
          d="M4.903 2.137c1.979-.247 3.37-.207 4.478.018 1.123.23 1.893.638 2.575.998.669.352 1.267.663 2.177.867.921.206 2.215.313 4.23.15l.157-.004c.783.02 1.48.65 1.48 1.503v8.918c0 .785-.607 1.421-1.363 1.491-2.178.202-3.706.116-4.897-.142-1.204-.261-2.01-.688-2.705-1.059-.682-.364-1.23-.659-2.049-.832-.69-.146-1.616-.212-2.986-.094V3.133a1 1 0 0 0-1.097-.996"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5 2.133a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0V3.133a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
FlagIconFillDuotone.displayName = "FlagIconFillDuotone";
export { FlagIconFillDuotone };
