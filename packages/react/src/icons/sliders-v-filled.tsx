import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersVIconFilled = memo(
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
          d="M11 15a4 4 0 0 1-3 3.874V22a1 1 0 1 1-2 0v-3.126a4.002 4.002 0 0 1 0-7.748V2a1 1 0 0 1 2 0v9.126c1.725.444 3 2.01 3 3.874M21 9a4 4 0 0 1-3 3.874V22a1 1 0 1 1-2 0v-9.126a4.002 4.002 0 0 1 0-7.748V2a1 1 0 1 1 2 0v3.126c1.725.444 3 2.01 3 3.874"
        />
      </svg>
    ))
);
SlidersVIconFilled.displayName = "SlidersVIconFilled";
export { SlidersVIconFilled };
