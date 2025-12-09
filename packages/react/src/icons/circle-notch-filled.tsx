import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleNotchIconFilled = memo(
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
          d="M18.01 3.868a1.5 1.5 0 0 1 2.121 0 11.5 11.5 0 0 1 2.494 12.533A11.504 11.504 0 0 1 5.61 21.56 11.5 11.5 0 0 1 .721 9.758c.443-2.23 1.539-4.28 3.147-5.889a1.5 1.5 0 0 1 2.12 2.122A8.502 8.502 0 0 0 12 20.5a8.502 8.502 0 0 0 8.337-10.158A8.5 8.5 0 0 0 18.01 5.99a1.5 1.5 0 0 1 0-2.122"
        />
      </svg>
    ))
);
CircleNotchIconFilled.displayName = "CircleNotchIconFilled";
export { CircleNotchIconFilled };
