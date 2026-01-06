import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiIcon = memo(
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
          d="M12 14.5c.997 0 1.93.282 2.728.773.344.212.43.76.022 1.181l-1.675 1.723a1.5 1.5 0 0 1-2.15 0L9.25 16.454c-.408-.42-.322-.969.021-1.18A5.2 5.2 0 0 1 12 14.5M12 9.5c2.482 0 4.758.913 6.528 2.435.17.145.196.432-.002.635l-.668.687c-.186.192-.538.22-.811.005a8.11 8.11 0 0 0-10.094 0c-.273.216-.625.187-.811-.005l-.668-.687c-.198-.203-.172-.49-.002-.635A9.98 9.98 0 0 1 12 9.5"
        />
        <path
          fill="currentColor"
          d="M12 4.5c3.82 0 7.308 1.464 9.965 3.88a.455.455 0 0 1-.001.655l-.668.687c-.19.195-.532.214-.775.002C18.23 7.714 15.252 6.5 12 6.5S5.77 7.715 3.478 9.724c-.242.212-.584.193-.774-.002l-.668-.687a.455.455 0 0 1 0-.655C4.691 5.964 8.18 4.5 12 4.5"
        />
      </svg>
    ))
);
WifiIcon.displayName = "WifiIcon";
export { WifiIcon };
