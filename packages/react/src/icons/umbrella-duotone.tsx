import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UmbrellaIconDuotone = memo(
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
          <path d="M12 12.25c.237 0 .491.026.75.073V19.5a1.75 1.75 0 1 0 3.5 0V19a.75.75 0 0 1 1.5 0v.5a3.25 3.25 0 0 1-6.5 0v-7.177c.259-.047.513-.073.75-.073M12 1.25a.75.75 0 0 1 .75.75v1.281A10 10 0 0 0 12 3.25q-.378.001-.75.031V2a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 3.25c5.385 0 9.75 4.365 9.75 9.75a.75.75 0 0 1-1.378.41c-.432-.66-1.307-1.16-2.372-1.16-.517 0-.846.118-1.096.286-.267.18-.503.457-.776.874a.75.75 0 0 1-1.256 0c-.174-.267-.568-.566-1.142-.802A4.8 4.8 0 0 0 12 12.25c-.54 0-1.171.13-1.73.358-.574.236-.968.535-1.142.802a.75.75 0 0 1-1.256 0c-.273-.418-.51-.694-.776-.874-.25-.168-.578-.286-1.096-.286-1.065 0-1.94.5-2.372 1.16A.75.75 0 0 1 2.25 13c0-5.385 4.364-9.75 9.749-9.75m0 1.5a8.25 8.25 0 0 0-8.057 6.473A4.64 4.64 0 0 1 6 10.75c.773 0 1.403.185 1.934.543.242.164.452.356.64.563a5 5 0 0 1 1.126-.635 6.3 6.3 0 0 1 2.3-.471c.752 0 1.577.174 2.3.47.392.162.783.374 1.126.636.187-.207.397-.4.64-.563.532-.358 1.16-.543 1.934-.543.738 0 1.442.17 2.056.473A8.25 8.25 0 0 0 12 4.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UmbrellaIconDuotone.displayName = "UmbrellaIconDuotone";
export { UmbrellaIconDuotone };
