import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiSlashIconDuotone = memo(
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
          <path d="M12 14.5c.61 0 1.194.106 1.74.3l1.25 1.25a.96.96 0 0 1-.24.404l-1.675 1.723a1.5 1.5 0 0 1-2.15 0L9.25 16.454c-.408-.42-.322-.969.021-1.18A5.2 5.2 0 0 1 12 14.5M10.566 11.627a8.14 8.14 0 0 0-3.613 1.635c-.273.216-.625.187-.811-.005l-.668-.687c-.198-.203-.172-.49-.002-.635a10.1 10.1 0 0 1 3.454-1.949zM12 9.5c2.483 0 4.758.913 6.528 2.435.17.145.196.432-.002.635l-.668.687c-.186.192-.538.22-.811.005a8.1 8.1 0 0 0-4.465-1.74l-1.93-1.931A10 10 0 0 1 12 9.5M6.621 7.682A13.1 13.1 0 0 0 3.48 9.724c-.243.212-.585.193-.775-.002l-.668-.687a.455.455 0 0 1 0-.655A15 15 0 0 1 5.138 6.2zM12 4.5c3.82 0 7.308 1.464 9.965 3.88a.455.455 0 0 1-.001.655l-.668.687c-.19.195-.532.214-.774.002C18.229 7.714 15.252 6.5 12 6.5c-1.34 0-2.631.208-3.849.59l-1.56-1.56A14.6 14.6 0 0 1 12 4.5" />
        </g>
        <path
          fill="currentColor"
          d="M3.47 3.47a.75.75 0 0 1 1.06 0l14 14a.75.75 0 1 1-1.06 1.06l-14-14a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
WifiSlashIconDuotone.displayName = "WifiSlashIconDuotone";
export { WifiSlashIconDuotone };
