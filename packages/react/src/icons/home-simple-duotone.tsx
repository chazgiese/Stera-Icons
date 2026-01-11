import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeSimpleIconDuotone = memo(
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
          d="M13.382 4.025a2.25 2.25 0 0 0-2.764 0l-6 4.667a2.25 2.25 0 0 0-.868 1.775V18A2.25 2.25 0 0 0 6 20.25h2a.75.75 0 0 0 0 1.5H6A3.75 3.75 0 0 1 2.25 18v-7.533a3.75 3.75 0 0 1 1.447-2.96l6-4.666a3.75 3.75 0 0 1 4.606 0l6 4.666a3.75 3.75 0 0 1 1.447 2.96V18A3.75 3.75 0 0 1 18 21.75h-2a.75.75 0 0 0 0-1.5h2A2.25 2.25 0 0 0 20.25 18v-7.533c0-.694-.32-1.349-.868-1.775z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16 20.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
HomeSimpleIconDuotone.displayName = "HomeSimpleIconDuotone";
export { HomeSimpleIconDuotone };
