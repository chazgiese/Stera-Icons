import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PoundSterlingIconBold = memo(
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
          d="M11.978 1.907c2.417-.36 5.18.747 6.88 3.579a1 1 0 1 1-1.715 1.028c-1.301-2.168-3.288-2.865-4.87-2.63C10.688 4.123 9.5 5.263 9.5 7v4H14a1 1 0 1 1 0 2H9.5v4c0 1.255-.63 2.26-1.334 3H19a1 1 0 0 1 0 2H5a1 1 0 0 1-.394-1.92l.021-.008.09-.043a7.87 7.87 0 0 0 1.414-.878C6.946 18.51 7.5 17.77 7.5 17v-4H5a1 1 0 0 1 0-2h2.5V7c0-2.872 2.062-4.733 4.477-5.094"
        />
      </svg>
    ))
);
PoundSterlingIconBold.displayName = "PoundSterlingIconBold";
export { PoundSterlingIconBold };
