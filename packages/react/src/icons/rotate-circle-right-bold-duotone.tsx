import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotateCircleRightIconBoldDuotone = memo(
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
          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m0 2a9 9 0 1 1 0 18 9 9 0 0 1 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.707 5.293a1 1 0 0 0-1.415 1.414L13.586 8H11.5a5 5 0 1 0 4.085 7.886 1 1 0 0 0-1.633-1.155A3 3 0 1 1 11.5 10h2.085l-1.293 1.292a1 1 0 0 0 1.415 1.414l2.93-2.93a1.1 1.1 0 0 0 0-1.554z"
        />
      </svg>
    ))
);
RotateCircleRightIconBoldDuotone.displayName =
  "RotateCircleRightIconBoldDuotone";
export { RotateCircleRightIconBoldDuotone };
