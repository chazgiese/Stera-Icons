import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanEyeIconLinetone = memo(
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
          d="M12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 6.75c3.432 0 6.389 2.03 7.686 4.945a.75.75 0 0 1 0 .61C18.389 15.22 15.432 17.25 12 17.25s-6.389-2.03-7.685-4.945a.75.75 0 0 1 0-.61C5.61 8.78 8.568 6.75 12 6.75m0 1.5c-2.707 0-5.044 1.531-6.169 3.75 1.125 2.219 3.462 3.75 6.17 3.75A6.9 6.9 0 0 0 18.167 12 6.9 6.9 0 0 0 12 8.25"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M3 16.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2a.75.75 0 0 1 .75-.75M21 16.25a.75.75 0 0 1 .75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 .75-.75M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" />
        </g>
      </svg>
    ))
);
ScanEyeIconLinetone.displayName = "ScanEyeIconLinetone";
export { ScanEyeIconLinetone };
