import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLeftRightIconFilled = memo(
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
          d="M17.213 6.806a.75.75 0 0 1 .817.163l4.5 4.5a.75.75 0 0 1 .094.947l-.094.114-4.5 4.5a.75.75 0 0 1-1.28-.53V13h-9.5v3.5a.75.75 0 0 1-1.28.53l-4.5-4.5-.052-.057a.75.75 0 0 1 .052-1.004l4.5-4.5a.75.75 0 0 1 1.28.53V11h9.5V7.5a.75.75 0 0 1 .463-.693"
        />
      </svg>
    ))
);
ArrowLeftRightIconFilled.displayName = "ArrowLeftRightIconFilled";
export { ArrowLeftRightIconFilled };
