import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListContractIconBoldDuotone = memo(
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
          <path d="M11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M18 14a1 1 0 0 1 .706.293l3.001 3a1 1 0 0 1-1.414 1.414L18 16.414l-2.292 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 .706-.293M20.293 5.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.415 0l-2.999-3a1 1 0 1 1 1.414-1.414L18 7.586z"
        />
      </svg>
    ))
);
ListContractIconBoldDuotone.displayName = "ListContractIconBoldDuotone";
export { ListContractIconBoldDuotone };
