import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpinnerIconFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 15.6a1 1 0 0 0-1 1V20a1 1 0 1 0 2 0v-2.4a1 1 0 0 0-1-1m-3.256-1.346a1 1 0 0 0-1.414 0L5.634 16.95a1 1 0 1 0 1.414 1.414l1.696-1.697a1 1 0 0 0 0-1.414m7.92 0a1 1 0 1 0-1.414 1.414l1.697 1.697a1 1 0 0 0 1.414-1.414zM4 11a1 1 0 1 0 0 2h2.4a1 1 0 0 0 0-2zm13.6 0a1 1 0 0 0 0 2H20a1 1 0 1 0 0-2zM7.047 5.638a1 1 0 1 0-1.414 1.414L7.33 8.748a1 1 0 1 0 1.414-1.414zm11.314-.001a1 1 0 0 0-1.414 0L15.25 7.334a1 1 0 0 0 1.414 1.414l1.697-1.696a1 1 0 0 0 0-1.415M12 3a1 1 0 0 0-1 1v2.4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SpinnerIconFilled.displayName = "SpinnerIconFilled";
export { SpinnerIconFilled };
