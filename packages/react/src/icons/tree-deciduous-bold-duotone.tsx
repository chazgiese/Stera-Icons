import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreeDeciduousIconBoldDuotone = memo(
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
          d="M12 1c1.87 0 3.44 1.283 3.878 3.017a4.5 4.5 0 0 1 3.276 7.105A5 5 0 0 1 16 20H8a5 5 0 0 1-3.155-8.878A4.5 4.5 0 0 1 8.12 4.017 4 4 0 0 1 12 1m0 2a2 2 0 0 0-2 2v.03a1 1 0 0 1-1.142.995 2.5 2.5 0 0 0-1.838 4.49 1 1 0 0 1-.199 1.725A3.001 3.001 0 0 0 8 18h8a3 3 0 0 0 1.179-5.76 1 1 0 0 1-.2-1.724 2.5 2.5 0 0 0-1.838-4.49A1 1 0 0 1 14 5.028V5a2 2 0 0 0-2-2"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-2h2z" />
      </svg>
    ))
);
TreeDeciduousIconBoldDuotone.displayName = "TreeDeciduousIconBoldDuotone";
export { TreeDeciduousIconBoldDuotone };
