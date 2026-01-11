import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreeIconFillDuotone = memo(
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
        <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-2.25h2z" />
        <path
          fill="currentColor"
          d="M12 1.25a.75.75 0 0 1 .59.287l4.444 5.667a.75.75 0 0 1-.59 1.213H15.32l3.493 4.453a.75.75 0 0 1-.59 1.213h-1.126l2.86 3.646c.643.82.059 2.02-.983 2.021H5.027c-1.042 0-1.626-1.201-.983-2.021l2.86-3.646H5.776a.75.75 0 0 1-.59-1.213l3.494-4.453H7.556a.751.751 0 0 1-.59-1.213l4.444-5.667.057-.064A.75.75 0 0 1 12 1.25"
          opacity={0.4}
        />
      </svg>
    ))
);
TreeIconFillDuotone.displayName = "TreeIconFillDuotone";
export { TreeIconFillDuotone };
