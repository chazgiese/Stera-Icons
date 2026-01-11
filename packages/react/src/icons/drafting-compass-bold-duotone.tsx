import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DraftingCompassIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M4.453 16.635a1 1 0 0 1 1.715 1.028l-2.31 3.852a1 1 0 0 1-1.715-1.03zM9.15 8.805a4 4 0 0 0 1.714 1.03l-1.606 2.68a1 1 0 0 1-1.716-1.03z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a4 4 0 0 1 2.85 6.806l7.007 11.68a1 1 0 0 1-1.715 1.029l-3.364-5.607A11.001 11.001 0 0 1 2.1 10.801a1 1 0 0 1 1.8-.873A9 9 0 0 0 12 15a9 9 0 0 0 3.745-.815l-2.61-4.35A3.998 3.998 0 0 1 8 6a4 4 0 0 1 4-4m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DraftingCompassIconBoldDuotone.displayName = "DraftingCompassIconBoldDuotone";
export { DraftingCompassIconBoldDuotone };
