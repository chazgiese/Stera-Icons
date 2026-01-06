import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MacWindowCursorIconBold = memo(
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
        <g fill="currentColor" clipPath="url(#clip0_3676_591)">
          <path
            fillRule="evenodd"
            d="M13.128 13.111c-.396-1.188.687-2.32 1.87-2.017l.114.033 7.817 2.605c1.457.486 1.42 2.56-.054 2.994l-3.206.942-.942 3.206c-.434 1.473-2.508 1.51-2.994.054zm4.067 5.878.71-2.408a1 1 0 0 1 .677-.677l2.41-.71-5.694-1.897z"
            clipRule="evenodd"
          />
          <path d="M17.2 3c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v1.99a1 1 0 0 1-2 0V8.8c0-.857 0-1.439-.037-1.889-.036-.438-.101-.663-.18-.82a2 2 0 0 0-.875-.873c-.156-.08-.38-.145-.82-.18C18.639 5 18.058 5 17.2 5H6.8c-.857 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82C3 7.361 3 7.942 3 8.8v6.4c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18C5.361 19 5.942 19 6.8 19h5.99a1 1 0 0 1 0 2H6.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C.999 16.702 1 16.024 1 15.2V8.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 2.999 5.976 3 6.8 3z" />
          <path d="M6.25 7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M9.75 7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M13.25 7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        </g>
      </svg>
    ))
);
MacWindowCursorIconBold.displayName = "MacWindowCursorIconBold";
export { MacWindowCursorIconBold };
