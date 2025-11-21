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
        <g fill="currentColor" opacity={0.4}>
          <path d="M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1" />
          <path
            fillRule="evenodd"
            d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
            clipRule="evenodd"
          />
          <path d="M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 5.5c4.019 0 7.436 2.54 8.923 6.116a1 1 0 0 1 0 .768C19.436 15.96 16.02 18.5 12.001 18.5s-7.436-2.54-8.923-6.116a1 1 0 0 1 0-.768C4.565 8.04 7.982 5.5 12 5.5m0 2c-2.997 0-5.623 1.811-6.904 4.5 1.28 2.689 3.907 4.5 6.905 4.5 2.997 0 5.622-1.812 6.903-4.5-1.28-2.688-3.906-4.5-6.903-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScanEyeIconLinetone.displayName = "ScanEyeIconLinetone";
export { ScanEyeIconLinetone };
