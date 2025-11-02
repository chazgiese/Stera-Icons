import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TruckIconBold = memo(
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
          d="M13 3a3 3 0 0 1 3 3h1.933c.648 0 1.266.28 1.693.769l2.632 3.007A3 3 0 0 1 23 11.752v3.998A2.25 2.25 0 0 1 20.75 18h-.286a3.5 3.5 0 0 1-6.928 0h-3.072a3.5 3.5 0 0 1-6.933-.037A3 3 0 0 1 1 15V6a3 3 0 0 1 3-3zM7 16a1.5 1.5 0 1 0 .001 3.002A1.5 1.5 0 0 0 7 16m10 0a1.496 1.496 0 0 0-1.5 1.5A1.5 1.5 0 1 0 17 16M4 5a1 1 0 0 0-1 1v9c0 .5.366.912.845.986A3.498 3.498 0 0 1 10.16 16h3.678q.074-.156.161-.303V6a1 1 0 0 0-1-1zm12 9.146A3.5 3.5 0 0 1 20.161 16h.589a.25.25 0 0 0 .25-.25v-3.998c0-.242-.088-.477-.247-.66L18.12 8.086A.25.25 0 0 0 17.933 8H16z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TruckIconBold.displayName = "TruckIconBold";
export { TruckIconBold };
