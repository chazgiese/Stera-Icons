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
          d="M3.89 2.14c2.338-.26 4.022-.136 5.378.194 1.348.328 2.326.854 3.18 1.28.851.426 1.608.772 2.66.92 1.064.15 2.5.106 4.675-.377A1 1 0 0 1 21 5.134v11a1 1 0 0 1-.783.976c-2.325.517-4.014.598-5.388.405-1.385-.196-2.378-.663-3.276-1.112-.897-.448-1.67-.86-2.758-1.126-1.081-.263-2.524-.39-4.685-.15A1 1 0 0 1 3 14.135v-11l.005-.095a1 1 0 0 1 .885-.9"
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
