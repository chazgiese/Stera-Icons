import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorOgIconLinetone = memo(
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
          d="M14.177 13.472a1 1 0 0 1 1.323.499l2.47 5.467a1 1 0 0 1-.498 1.324l-3.646 1.647a1 1 0 0 1-1.323-.5l-2.47-5.467a1 1 0 0 1 1.822-.824l2.058 4.557 1.823-.825-2.06-4.555a1 1 0 0 1 .5-1.323"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M6.588 1.538A1 1 0 0 1 7.66 1.7l12.762 11.242a1 1 0 0 1-.528 1.74l-5.174.693a1 1 0 1 1-.265-1.982l2.998-.402L8 4.662l.004 12.6 2.283-1.985a1 1 0 1 1 1.313 1.508L7.66 20.211a1.001 1.001 0 0 1-1.656-.754L6 2.45a1 1 0 0 1 .588-.91"
        />
      </svg>
    ))
);
CursorOgIconLinetone.displayName = "CursorOgIconLinetone";
export { CursorOgIconLinetone };
