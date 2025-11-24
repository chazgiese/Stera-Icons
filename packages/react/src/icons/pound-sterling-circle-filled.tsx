import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PoundSterlingCircleIconFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m4.277 6.96c-1.065-1.71-2.81-2.392-4.348-2.17C10.397 6.01 9 7.176 9 9.04v1.754H8a1 1 0 0 0 0 2h1v1.753c0 .193-.159.483-.604.82a4 4 0 0 1-.773.456l-.006.003-.079.037A1 1 0 0 0 8 17.75h8a1 1 0 1 0 0-2h-5.312A2.5 2.5 0 0 0 11 14.547v-1.753h2.143a1 1 0 0 0 0-2H11V9.04c0-.674.46-1.16 1.214-1.27.746-.107 1.716.205 2.365 1.248a1 1 0 0 0 1.698-1.057"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PoundSterlingCircleIconFilled.displayName = "PoundSterlingCircleIconFilled";
export { PoundSterlingCircleIconFilled };
