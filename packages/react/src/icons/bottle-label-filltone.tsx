import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BottleLabelIconFilltone = memo(
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
          d="M12.5 1a1 1 0 0 1 .992.876l.68 5.44a1 1 0 0 0 .212.5l1.209 1.511a3 3 0 0 1 .657 1.874V21a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-9.799a3 3 0 0 1 .657-1.874l1.21-1.51c.115-.145.188-.318.211-.502l.68-5.439.015-.093A1 1 0 0 1 11.5 1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.25 19H7.754v-2h8.496zM16.25 14H7.753v-2h8.497zM13.5 1a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
BottleLabelIconFilltone.displayName = "BottleLabelIconFilltone";
export { BottleLabelIconFilltone };
