import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AngleIconDuotone = memo(
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
          <path d="M19.484 15.147a.75.75 0 0 1 .898.565l.003.01a.75.75 0 0 1-1.463.333l-.003-.01a.75.75 0 0 1 .565-.899M18.288 12.244a.75.75 0 0 1 1.002.35l.005.01a.75.75 0 0 1-1.352.65l-.005-.008a.75.75 0 0 1 .35-1.002M16.475 9.68a.75.75 0 0 1 1.053.119l.007.009a.75.75 0 1 1-1.172.935l-.006-.008a.75.75 0 0 1 .118-1.054M14.139 7.583a.75.75 0 0 1 1.053-.118l.01.007a.75.75 0 1 1-.937 1.17l-.008-.005a.75.75 0 0 1-.118-1.054M11.396 6.056a.75.75 0 0 1 1-.35q.006 0 .01.004a.75.75 0 0 1-.652 1.352l-.009-.005a.75.75 0 0 1-.35-1.001M8.38 5.18a.75.75 0 0 1 .897-.565l.011.003a.75.75 0 1 1-.333 1.463l-.01-.003a.75.75 0 0 1-.565-.897" />
        </g>
        <path
          fill="currentColor"
          d="M6 4.25a.75.75 0 0 1 .75.75v13.25H20a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 6 4.25"
        />
      </svg>
    ))
);
AngleIconDuotone.displayName = "AngleIconDuotone";
export { AngleIconDuotone };
