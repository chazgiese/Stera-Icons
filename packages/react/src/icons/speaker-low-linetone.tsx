import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerLowIconLinetone = memo(
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
          d="M17.645 7.548a1 1 0 0 1 1.403.182 6.98 6.98 0 0 1 1.452 4.268 6.97 6.97 0 0 1-1.452 4.269 1 1 0 1 1-1.584-1.22 4.98 4.98 0 0 0 1.036-3.049 4.97 4.97 0 0 0-1.036-3.048 1 1 0 0 1 .181-1.402"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.66 4.426c1.416-1.416 3.84-.413 3.84 1.591v11.965c0 2.004-2.423 3.008-3.84 1.59l-3.5-3.5A.25.25 0 0 0 7.981 16H5.75a2.25 2.25 0 0 1-2.238-2.02l-.012-.23v-3.5A2.25 2.25 0 0 1 5.75 8h2.232a.25.25 0 0 0 .177-.074zm1.84 1.591a.25.25 0 0 0-.427-.177l-3.5 3.5a2.25 2.25 0 0 1-1.59.66H5.75a.25.25 0 0 0-.25.25v3.5l.005.05a.25.25 0 0 0 .245.2h2.232c.597 0 1.17.237 1.591.659l3.5 3.5a.25.25 0 0 0 .427-.177z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SpeakerLowIconLinetone.displayName = "SpeakerLowIconLinetone";
export { SpeakerLowIconLinetone };
