import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DraftingCompassIconDuotone = memo(
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
          <path d="M4.668 16.763a.75.75 0 0 1 1.286.772l-2.31 3.85a.751.751 0 0 1-1.288-.77zM9.466 8.764c.368.338.804.602 1.286.772l-1.71 2.85a.75.75 0 0 1-1.285-.772z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2.25a3.75 3.75 0 0 1 2.533 6.514l7.11 11.85a.75.75 0 0 1-1.287.772l-3.482-5.804a10.751 10.751 0 0 1-14.549-4.89.751.751 0 0 1 1.35-.656 9.25 9.25 0 0 0 8.324 5.214 9.2 9.2 0 0 0 4.101-.957l-2.853-4.757A3.75 3.75 0 1 1 12 2.25m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DraftingCompassIconDuotone.displayName = "DraftingCompassIconDuotone";
export { DraftingCompassIconDuotone };
