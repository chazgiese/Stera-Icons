import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListContractIconBold = memo(
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
          d="M11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM17.999 14a1 1 0 0 1 .707.293l3.001 3a1 1 0 1 1-1.414 1.414l-2.294-2.293-2.292 2.293a1 1 0 1 1-1.414-1.414l2.999-3a1 1 0 0 1 .707-.293M11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM20.293 5.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.415 0l-2.999-3a1 1 0 1 1 1.414-1.414l2.292 2.293zM11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ListContractIconBold.displayName = "ListContractIconBold";
export { ListContractIconBold };
