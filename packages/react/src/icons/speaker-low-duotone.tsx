import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerLowIconDuotone = memo(
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
          d="M11.836 4.604c1.26-1.26 3.414-.368 3.414 1.414v11.965c0 1.781-2.154 2.673-3.414 1.414l-3.5-3.5a.5.5 0 0 0-.354-.147H5.75a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h2.232a.5.5 0 0 0 .354-.146zm1.914 1.414a.5.5 0 0 0-.854-.354l-3.5 3.5a2 2 0 0 1-1.414.586H5.75a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.414.586l3.5 3.5a.5.5 0 0 0 .854-.353z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M17.798 7.746a.75.75 0 0 1 1.052.136 6.73 6.73 0 0 1 1.4 4.116 6.73 6.73 0 0 1-1.4 4.117.75.75 0 0 1-1.188-.915 5.23 5.23 0 0 0 1.088-3.202 5.23 5.23 0 0 0-1.088-3.2.75.75 0 0 1 .136-1.052"
          opacity={0.4}
        />
      </svg>
    ))
);
SpeakerLowIconDuotone.displayName = "SpeakerLowIconDuotone";
export { SpeakerLowIconDuotone };
