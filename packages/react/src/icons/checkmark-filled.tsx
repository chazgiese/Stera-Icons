import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckmarkFilled = memo(
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
          d="M18.903 4.977a1.5 1.5 0 0 1 2.194 2.046l-11.2 12a1.5 1.5 0 0 1-2.326-.163l-4.8-6.857a1.5 1.5 0 1 1 2.457-1.72l3.739 5.34z"
        />
      </svg>
    ))
);
CheckmarkFilled.displayName = "CheckmarkFilled";
export { CheckmarkFilled };
