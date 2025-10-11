import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TennisBallIconBold = memo(
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
          d="M12 1c2.998 0 5.717 1.2 7.7 3.145A10.97 10.97 0 0 1 23 12a10.97 10.97 0 0 1-3.3 7.855A10.97 10.97 0 0 1 12 23c-2.998 0-5.717-1.2-7.7-3.145A10.97 10.97 0 0 1 1 12a10.97 10.97 0 0 1 3.3-7.855A10.97 10.97 0 0 1 12 1m0 2a8.96 8.96 0 0 0-5.571 1.933A10.96 10.96 0 0 1 9 12c0 2.69-.968 5.156-2.571 7.066A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 5.57-1.934A10.96 10.96 0 0 1 15 12c0-2.69.967-5.156 2.57-7.067A8.96 8.96 0 0 0 12 3M5 6.347A8.96 8.96 0 0 0 3 12c0 2.143.75 4.108 2 5.653 1.25-1.545 2-3.51 2-5.653s-.75-4.107-2-5.653m14 0A8.96 8.96 0 0 0 17 12c0 2.143.75 4.108 2 5.653 1.25-1.545 2-3.51 2-5.653s-.75-4.107-2-5.653"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TennisBallIconBold.displayName = "TennisBallIconBold";
export { TennisBallIconBold };
