import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AngleIconFillDuotone = memo(
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
          <path d="M18.852 13.24a1.5 1.5 0 0 1 1.891.963l.004.012a1.5 1.5 0 0 1-2.854.926q0-.006-.003-.01a1.5 1.5 0 0 1 .962-1.89M16.44 9.554a1.5 1.5 0 0 1 2.096.329l.008.01a1.5 1.5 0 0 1-2.427 1.764l-.006-.008a1.5 1.5 0 0 1 .33-2.095M13.012 6.787a1.5 1.5 0 0 1 2.095-.33q.006.002.01.007a1.5 1.5 0 0 1-1.767 2.425l-.007-.006a1.5 1.5 0 0 1-.331-2.096M8.895 5.218a1.5 1.5 0 0 1 1.89-.965l.012.004a1.5 1.5 0 0 1-.928 2.853q-.005-.001-.01-.004a1.5 1.5 0 0 1-.964-1.888" />
        </g>
        <path
          fill="currentColor"
          d="M6 3.5A1.5 1.5 0 0 1 7.5 5v12.5H20a1.5 1.5 0 0 1 0 3H6A1.5 1.5 0 0 1 4.5 19V5A1.5 1.5 0 0 1 6 3.5"
        />
      </svg>
    ))
);
AngleIconFillDuotone.displayName = "AngleIconFillDuotone";
export { AngleIconFillDuotone };
