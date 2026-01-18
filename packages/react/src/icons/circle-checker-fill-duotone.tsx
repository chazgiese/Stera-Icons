import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleCheckerIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M12 22V12h10c0 5.523-4.477 10-10 10" />
          <path
            fillRule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2v10z"
            clipRule="evenodd"
          />
        </g>
        <path fill="currentColor" d="M22 12H12V2c5.523 0 10 4.477 10 10" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 22C6.477 22 2 17.523 2 12h10z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleCheckerIconFillDuotone.displayName = "CircleCheckerIconFillDuotone";
export { CircleCheckerIconFillDuotone };
