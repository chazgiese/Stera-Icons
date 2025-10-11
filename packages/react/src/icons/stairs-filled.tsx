import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StairsIconFilled = memo(
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
          d="M22.5 2a1.5 1.5 0 0 1 0 3h-4.167v5.167a1.5 1.5 0 0 1-1.5 1.5h-5.166v5.166a1.5 1.5 0 0 1-1.5 1.5H5V22.5a1.5 1.5 0 0 1-3 0v-5.667a1.5 1.5 0 0 1 1.5-1.5h5.167v-5.166a1.5 1.5 0 0 1 1.5-1.5h5.166V3.5a1.5 1.5 0 0 1 1.5-1.5z"
        />
      </svg>
    ))
);
StairsIconFilled.displayName = "StairsIconFilled";
export { StairsIconFilled };
