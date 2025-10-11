import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BaseballIconFilled = memo(
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
          fillRule="evenodd"
          d="M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556-11.26 4.296-15.556 0-4.296-11.26 0-15.556m16.523 7.163a1 1 0 0 0-.466 1.946q.499.12 1.002.198a1 1 0 0 0 .311-1.976q-.425-.067-.847-.168m-8.623 8.155a1 1 0 0 0-.739 1.206q.101.42.168.847a1 1 0 0 0 1.976-.313q-.08-.504-.2-1.001a1 1 0 0 0-1.205-.74M9.81 15.45a1 1 0 0 0-.221 1.396q.255.352.479.718a1 1 0 0 0 1.706-1.044q-.267-.435-.567-.85a1 1 0 0 0-1.397-.22m7.038-5.865a1 1 0 0 0-1.175 1.619 13 13 0 0 0 .849.567 1 1 0 0 0 1.046-1.705 11 11 0 0 1-.72-.481M7.48 12.229a1 1 0 1 0-1.047 1.704 11 11 0 0 1 .72.482 1 1 0 0 0 1.175-1.619 13 13 0 0 0-.848-.567m5.078-6.125c-.471.288-.62.905-.332 1.376q.267.435.568.85a1 1 0 0 0 1.619-1.176q-.255-.351-.48-.718a1 1 0 0 0-1.375-.332m-1.253-4.528a1 1 0 0 0-.83 1.144q.08.504.199 1.001a1 1 0 0 0 1.944-.467 11 11 0 0 1-.168-.848 1 1 0 0 0-1.145-.83M2.72 10.47a1 1 0 0 0-.312 1.975q.426.067.847.169a1 1 0 0 0 .467-1.945q-.499-.12-1.002-.2"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BaseballIconFilled.displayName = "BaseballIconFilled";
export { BaseballIconFilled };
