import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerHighIconFilltone = memo(
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
          <path d="M19.771 3.223a1 1 0 0 1 1.4.2A14.28 14.28 0 0 1 24 12.002c0 3.227-1.054 6.204-2.83 8.576a1 1 0 0 1-1.6-1.198A12.28 12.28 0 0 0 22 12c0-2.787-.91-5.345-2.43-7.378a1 1 0 0 1 .201-1.4" />
          <path d="M17.004 5.351a1 1 0 0 1 1.401.19 10.2 10.2 0 0 1 2.095 6.21c0 2.491-.89 4.777-2.368 6.554a1 1 0 0 1-1.538-1.28A8.2 8.2 0 0 0 18.5 11.75c0-1.88-.628-3.611-1.686-4.998a1 1 0 0 1 .19-1.402" />
          <path d="M14.145 7.55a1 1 0 0 1 1.403.182A6.97 6.97 0 0 1 17 12.001a6.97 6.97 0 0 1-1.452 4.268 1 1 0 1 1-1.584-1.22A4.97 4.97 0 0 0 15 12a4.98 4.98 0 0 0-1.036-3.049 1 1 0 0 1 .181-1.402" />
        </g>
        <path
          fill="currentColor"
          d="M8.16 4.426C9.576 3.01 12 4.013 12 6.017v11.965c0 2.004-2.423 3.008-3.84 1.59l-3.5-3.5A.25.25 0 0 0 4.481 16H2.25A2.25 2.25 0 0 1 0 13.75v-3.5A2.25 2.25 0 0 1 2.25 8h2.232a.25.25 0 0 0 .177-.074z"
        />
      </svg>
    ))
);
SpeakerHighIconFilltone.displayName = "SpeakerHighIconFilltone";
export { SpeakerHighIconFilltone };
