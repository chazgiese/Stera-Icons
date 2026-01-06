import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownRightIconBoldDuotone = memo(
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
          d="M3 3a1 1 0 0 0-1 1v8a4 4 0 0 0 4 4h12.586l1-1-1-1H6a2 2 0 0 1-2-2V4a1 1 0 0 0-1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.707 9.293a1 1 0 1 0-1.414 1.414L19.586 15l-4.293 4.293a1 1 0 0 0 1.414 1.414l5-5 .066-.073a1 1 0 0 0-.066-1.34z"
        />
      </svg>
    ))
);
ArrowCornerDownRightIconBoldDuotone.displayName =
  "ArrowCornerDownRightIconBoldDuotone";
export { ArrowCornerDownRightIconBoldDuotone };
