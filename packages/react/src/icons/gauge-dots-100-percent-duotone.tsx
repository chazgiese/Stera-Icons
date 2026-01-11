import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots100PercentIconDuotone = memo(
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
          <path d="M7.404 15.347a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.404 6.154a1.25 1.25 0 1 1 0 2.501 1.25 1.25 0 0 1 0-2.5M16.597 6.154a1.25 1.25 0 1 1-.001 2.501 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
          <path
            fillRule="evenodd"
            d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          d="M10.763 10.763a1.75 1.75 0 0 1 2.474 0l.04.042c.322.376 1.404 1.82 2.378 3.13.494.665.969 1.308 1.32 1.784l.42.572.118.158.038.052.002.004v.001l.072.116a.75.75 0 0 1-1.119.932l-.001-.001-.004-.002-.052-.038-.158-.117-.572-.421c-.476-.351-1.12-.826-1.783-1.32-1.312-.974-2.755-2.056-3.131-2.378l-.042-.04a1.75 1.75 0 0 1 0-2.474"
        />
      </svg>
    ))
);
GaugeDots100PercentIconDuotone.displayName = "GaugeDots100PercentIconDuotone";
export { GaugeDots100PercentIconDuotone };
