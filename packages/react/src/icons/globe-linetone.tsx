import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GlobeIconLinetone = memo(
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
          d="M12.043 1.001a1 1 0 0 1 .158.02l.033.006.008.002.033.01a1 1 0 0 1 .198.081 1 1 0 0 1 .27.211A15.9 15.9 0 0 1 16.805 11H22a1 1 0 1 1 0 2h-5.195a15.9 15.9 0 0 1-4.062 9.669 1 1 0 0 1-.468.291q-.018.006-.037.01-.018.005-.037.009a1 1 0 0 1-.201.019 1 1 0 0 1-.202-.02l-.037-.007-.036-.011q-.03-.008-.058-.018a1 1 0 0 1-.41-.273A15.9 15.9 0 0 1 7.195 13H2a1 1 0 1 1 0-2h5.195a15.9 15.9 0 0 1 4.062-9.669 1 1 0 0 1 .41-.274q.028-.01.058-.018.018-.006.036-.01.019-.006.037-.008a1 1 0 0 1 .159-.02zM9.203 13A13.9 13.9 0 0 0 12 20.43 13.9 13.9 0 0 0 14.798 13zM12 3.568A13.9 13.9 0 0 0 9.202 11h5.596A13.9 13.9 0 0 0 12 3.568"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GlobeIconLinetone.displayName = "GlobeIconLinetone";
export { GlobeIconLinetone };
