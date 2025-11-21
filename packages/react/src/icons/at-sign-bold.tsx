import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AtSignIconBold = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11q0 .555-.055 1.099c-.283 2.854-2.074 4.641-4.16 4.631-1.407-.006-2.603-.82-3.256-2.19A5 5 0 1 1 15 8 1 1 0 0 1 17 8v5c0 2.096 1.077 2.727 1.794 2.73.764.004 1.948-.683 2.161-2.829Q21 12.457 21 12a9 9 0 1 0-9 9c1.64 0 3.176-.438 4.499-1.203a1 1 0 0 1 1.002 1.73A10.96 10.96 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1m0 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AtSignIconBold.displayName = "AtSignIconBold";
export { AtSignIconBold };
