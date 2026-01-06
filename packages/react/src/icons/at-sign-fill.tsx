import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AtSignIconFill = memo(
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
        <g clipPath="url(#clip0_3590_206)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 .5C18.351.5 23.5 5.649 23.5 12q0 .58-.057 1.148c-.3 3.032-2.243 5.093-4.66 5.083-1.426-.007-2.623-.725-3.386-1.908a5.5 5.5 0 1 1-.678-9.103A1.498 1.498 0 0 1 17.5 8v5c0 .965.263 1.532.512 1.83.243.292.525.4.784.4.433.002 1.467-.41 1.662-2.378q.042-.42.042-.852a8.5 8.5 0 1 0-4.251 7.363 1.5 1.5 0 0 1 1.502 2.598A11.45 11.45 0 0 1 12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5m0 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ))
);
AtSignIconFill.displayName = "AtSignIconFill";
export { AtSignIconFill };
