import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlusCircleIconFill = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m.006 5a1 1 0 0 0-1 1v3.994H7a1 1 0 0 0 0 2h4.006V17a1 1 0 1 0 2 0v-4.006H17a1 1 0 1 0 0-2h-3.994V7a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlusCircleIconFill.displayName = "PlusCircleIconFill";
export { PlusCircleIconFill };
