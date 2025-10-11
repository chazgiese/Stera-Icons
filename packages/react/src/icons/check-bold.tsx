import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckIconBold = memo(
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
          d="M19.269 5.317a1.001 1.001 0 0 1 1.462 1.365L10.205 17.96c-.103.11-.225.242-.339.344a1.5 1.5 0 0 1-.588.342 1.5 1.5 0 0 1-1.043-.073 1.5 1.5 0 0 1-.534-.421c-.099-.118-.2-.264-.287-.388l-4.233-6.047a1.001 1.001 0 0 1 1.638-1.148l4.092 5.846z"
        />
      </svg>
    ))
);
CheckIconBold.displayName = "CheckIconBold";
export { CheckIconBold };
