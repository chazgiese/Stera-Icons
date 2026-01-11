import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots50PercentIcon = memo(
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
          d="M7.404 15.347a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.597 15.347a1.25 1.25 0 1 1-.001 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a.75.75 0 0 1 .742.642l.01.063q.01.068.03.195l.106.703c.088.584.207 1.374.328 2.193.238 1.616.494 3.403.532 3.896l.002.058a1.75 1.75 0 0 1-3.5 0l.002-.058c.038-.494.294-2.28.532-3.896.12-.819.24-1.609.328-2.193l.107-.703.029-.195.01-.063v-.004l.033-.134A.75.75 0 0 1 12 4.25M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.404 6.154a1.25 1.25 0 1 1 0 2.501 1.25 1.25 0 0 1 0-2.5M16.597 6.154a1.25 1.25 0 1 1-.001 2.501 1.25 1.25 0 0 1 0-2.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeDots50PercentIcon.displayName = "GaugeDots50PercentIcon";
export { GaugeDots50PercentIcon };
