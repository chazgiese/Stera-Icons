import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapPinIconLinetone = memo(
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
          d="M12 1c4.992 0 9 4.132 9 9.182 0 1.597-.582 3.189-1.374 4.63-.797 1.449-1.847 2.816-2.875 3.985a37 37 0 0 1-3.762 3.683q-.171.144-.266.221l-.073.059q-.011.011-.02.016l-.005.004-.002.002-.006.002a.99.99 0 0 1-1.235 0q-.002 0-.004-.002l-.003-.002-.006-.004-.02-.016-.072-.059q-.095-.076-.266-.22a36.771 36.771 0 0 1-3.762-3.684c-1.028-1.169-2.078-2.536-2.875-3.985C3.582 13.37 3 11.779 3 10.182 3 5.132 7.008 1 12 1m0 2c-3.845 0-7 3.194-7 7.182 0 1.13.418 2.38 1.126 3.666.703 1.277 1.653 2.524 2.625 3.628A35 35 0 0 0 12 20.692q.251-.216.577-.511a35 35 0 0 0 2.672-2.705c.972-1.104 1.922-2.35 2.625-3.628C18.582 12.56 19 11.31 19 10.182 19 6.194 15.845 3 12 3"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MapPinIconLinetone.displayName = "MapPinIconLinetone";
export { MapPinIconLinetone };
