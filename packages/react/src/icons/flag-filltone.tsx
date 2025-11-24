import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagIconFilltone = memo(
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
          d="M3.89 2.005c2.338-.26 4.022-.136 5.378.195 1.348.328 2.326.853 3.18 1.28.851.426 1.608.771 2.66.92 1.064.15 2.5.106 4.675-.377A1.002 1.002 0 0 1 21 4.999v11a1 1 0 0 1-.783.977c-2.325.517-4.014.598-5.388.404-1.385-.195-2.378-.662-3.276-1.111s-1.67-.86-2.758-1.126c-.926-.226-2.116-.349-3.795-.23V3a1 1 0 0 0-1.11-.995"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4 2a1 1 0 0 1 1 1v18l-.005.102a1 1 0 0 1-1.99 0L3 21V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
FlagIconFilltone.displayName = "FlagIconFilltone";
export { FlagIconFilltone };
