import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserCircleDashedIconDuotone = memo(
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
          <path d="M13.806 21.074a.75.75 0 0 1 .292 1.47 10.8 10.8 0 0 1-4.196 0 .75.75 0 1 1 .292-1.47 9.3 9.3 0 0 0 3.612 0M3.268 16.933a.75.75 0 0 1 1.04.206 9.3 9.3 0 0 0 2.553 2.553.75.75 0 1 1-.835 1.247 10.8 10.8 0 0 1-2.964-2.965.75.75 0 0 1 .206-1.041M19.692 17.139a.75.75 0 0 1 1.247.835 10.8 10.8 0 0 1-2.965 2.965.75.75 0 0 1-.835-1.247 9.3 9.3 0 0 0 2.553-2.553M1.455 9.902a.75.75 0 1 1 1.47.292 9.3 9.3 0 0 0 0 3.612.75.75 0 0 1-1.47.292 10.8 10.8 0 0 1 0-4.196M21.664 9.313a.75.75 0 0 1 .88.59 10.8 10.8 0 0 1 0 4.195.75.75 0 1 1-1.47-.292 9.3 9.3 0 0 0 0-3.612.75.75 0 0 1 .59-.882M6.026 3.062a.75.75 0 0 1 .835 1.246A9.3 9.3 0 0 0 4.308 6.86a.75.75 0 0 1-1.246-.835 10.8 10.8 0 0 1 2.964-2.964M16.933 3.268a.75.75 0 0 1 1.04-.206 10.8 10.8 0 0 1 2.966 2.964.75.75 0 0 1-1.247.835 9.3 9.3 0 0 0-2.553-2.553.75.75 0 0 1-.206-1.04M12 1.25c.717 0 1.419.07 2.098.205a.75.75 0 1 1-.292 1.47 9.3 9.3 0 0 0-3.612 0 .75.75 0 0 1-.292-1.47Q10.923 1.252 12 1.25" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 6.25a4.75 4.75 0 0 1 2.915 8.498 8.77 8.77 0 0 1 4.2 3.16 9.3 9.3 0 0 1-1.071 1.09A7.24 7.24 0 0 0 12 15.75a7.24 7.24 0 0 0-6.045 3.248 9.3 9.3 0 0 1-1.07-1.09 8.77 8.77 0 0 1 4.199-3.16A4.75 4.75 0 0 1 12 6.25m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UserCircleDashedIconDuotone.displayName = "UserCircleDashedIconDuotone";
export { UserCircleDashedIconDuotone };
