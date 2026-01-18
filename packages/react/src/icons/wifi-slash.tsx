import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiSlashIcon = memo(
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
          d="M3.293 3.293a1 1 0 0 1 1.414 0l14 14a1 1 0 1 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414M14.195 17.024l-1.12 1.153a1.5 1.5 0 0 1-2.15 0L9.25 16.454c-.408-.42-.322-.969.022-1.18a5.2 5.2 0 0 1 2.41-.763zM9.179 12.007a8.2 8.2 0 0 0-2.226 1.255c-.273.216-.625.187-.811-.005l-.668-.687c-.198-.203-.172-.49-.002-.635a10.2 10.2 0 0 1 2.193-1.442zM12.335 9.507a9.98 9.98 0 0 1 6.193 2.428c.17.145.196.432-.002.635l-.668.687c-.186.192-.538.22-.811.005a8.2 8.2 0 0 0-2.202-1.245zM5.461 8.29c-.705.415-1.368.896-1.982 1.434-.243.212-.585.193-.775-.002l-.668-.687a.455.455 0 0 1 0-.655 15 15 0 0 1 1.987-1.528zM12 4.5c3.82 0 7.308 1.464 9.965 3.88a.455.455 0 0 1-.001.655l-.668.687c-.19.195-.532.214-.774.002a12.863 12.863 0 0 0-10.96-2.99L7.907 5.079A14.7 14.7 0 0 1 12 4.5"
        />
      </svg>
    ))
);
WifiSlashIcon.displayName = "WifiSlashIcon";
export { WifiSlashIcon };
