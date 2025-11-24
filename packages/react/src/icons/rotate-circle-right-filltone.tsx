import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotateCircleRightIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m1.706 4.293a1 1 0 0 0-1.414 1.414L13.585 8h-2.086a5 5 0 1 0 4.084 7.886 1 1 0 0 0-1.633-1.155A3 3 0 1 1 11.5 10h2.086l-1.293 1.292a1 1 0 0 0 1.414 1.414l2.93-2.93a1.1 1.1 0 0 0 0-1.554z"
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
RotateCircleRightIconFilltone.displayName = "RotateCircleRightIconFilltone";
export { RotateCircleRightIconFilltone };
