import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowRotateCircleRightFilled = memo(
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
          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m.292 4.293a1 1 0 0 1 1.414 0l2.93 2.93a1.1 1.1 0 0 1 0 1.554l-2.93 2.93a1 1 0 0 1-1.414-1.414L13.585 10h-2.086a3 3 0 1 0 2.451 4.73 1 1 0 0 1 1.633 1.156A5 5 0 1 1 11.499 8h2.086l-1.293-1.293a1 1 0 0 1 0-1.414"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowRotateCircleRightFilled.displayName = "ArrowRotateCircleRightFilled";
export { ArrowRotateCircleRightFilled };
