import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UmbrellaIcon = memo(
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
          d="M12 1.25a.75.75 0 0 1 .75.75v1.281c5.034.383 9 4.587 9 9.719a.75.75 0 0 1-1.378.41c-.432-.66-1.307-1.16-2.372-1.16-.517 0-.846.118-1.096.286-.267.18-.503.457-.776.874a.75.75 0 0 1-1.256 0c-.174-.267-.568-.566-1.142-.802a5 5 0 0 0-.98-.285V19.5a1.75 1.75 0 1 0 3.5 0V19a.75.75 0 0 1 1.5 0v.5a3.25 3.25 0 0 1-6.5 0v-7.177c-.33.06-.666.157-.98.285-.574.236-.968.535-1.142.802a.75.75 0 0 1-1.256 0c-.273-.418-.51-.694-.776-.874-.25-.168-.578-.286-1.096-.286-1.065 0-1.94.5-2.372 1.16A.75.75 0 0 1 2.25 13c0-5.132 3.965-9.336 8.999-9.719V2a.75.75 0 0 1 .75-.75m0 3.5a8.25 8.25 0 0 0-8.057 6.473A4.64 4.64 0 0 1 6 10.75c.773 0 1.403.185 1.934.543.242.164.452.356.64.563a5 5 0 0 1 1.126-.635 6.3 6.3 0 0 1 2.3-.471c.752 0 1.577.174 2.3.47.392.162.783.374 1.126.636.187-.207.397-.4.64-.563.532-.358 1.16-.543 1.934-.543.738 0 1.442.17 2.056.473A8.25 8.25 0 0 0 12 4.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UmbrellaIcon.displayName = "UmbrellaIcon";
export { UmbrellaIcon };
