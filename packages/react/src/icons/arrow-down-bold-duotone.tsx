import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowDownIconBoldDuotone = memo(
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
          d="M12 4a1 1 0 0 1 1 1v11.586l-1 1-1-1V5a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.293 11.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L12 17.586z"
        />
      </svg>
    ))
);
ArrowDownIconBoldDuotone.displayName = "ArrowDownIconBoldDuotone";
export { ArrowDownIconBoldDuotone };
