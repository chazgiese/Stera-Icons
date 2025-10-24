import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M9 8a1 1 0 0 1 0 2H7.25a.25.25 0 0 0-.25.25v3.5l.005.05a.25.25 0 0 0 .245.2h2.232c.597 0 1.17.237 1.591.659l3.5 3.5a.25.25 0 0 0 .427-.177V16a1 1 0 0 1 2 0v1.982c0 2.004-2.423 3.008-3.84 1.59l-3.5-3.5A.25.25 0 0 0 9.481 16H7.25a2.25 2.25 0 0 1-2.238-2.02L5 13.75v-3.5A2.25 2.25 0 0 1 7.25 8zM13.16 4.426C14.575 3.01 17 4.013 17 6.017v5.733a1 1 0 1 1-2 0V6.017a.25.25 0 0 0-.427-.177l-2.247 2.248a1 1 0 0 1-1.414-1.415z" />
        </g>
        <path
          fill="currentColor"
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
SpeakerOffIconLinetone.displayName = "SpeakerOffIconLinetone";
export { SpeakerOffIconLinetone };
