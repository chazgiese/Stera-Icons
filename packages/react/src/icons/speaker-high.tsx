import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerHighIcon = memo(
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
          d="M19.92 3.423a.75.75 0 0 1 1.05.151 14.03 14.03 0 0 1 2.78 8.427c0 3.172-1.036 6.097-2.78 8.427a.75.75 0 0 1-1.2-.9 12.53 12.53 0 0 0 2.48-7.527 12.53 12.53 0 0 0-2.48-7.528.75.75 0 0 1 .15-1.05"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.336 4.604c1.26-1.26 3.414-.368 3.414 1.414v11.965c0 1.781-2.154 2.673-3.414 1.413l-3.5-3.5a.5.5 0 0 0-.354-.146H2.25a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h2.232a.5.5 0 0 0 .354-.146zm1.914 1.414a.5.5 0 0 0-.854-.354l-3.5 3.5a2 2 0 0 1-1.414.586H2.25a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.414.586l3.5 3.5a.5.5 0 0 0 .854-.353z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M17.155 5.55a.75.75 0 0 1 1.051.142 9.96 9.96 0 0 1 2.044 6.059c0 2.43-.868 4.66-2.31 6.394a.75.75 0 0 1-1.154-.96 8.46 8.46 0 0 0 1.964-5.434c0-1.937-.647-3.72-1.736-5.15a.75.75 0 0 1 .141-1.05"
        />
        <path
          fill="currentColor"
          d="M14.298 7.748a.75.75 0 0 1 1.052.137A6.72 6.72 0 0 1 16.75 12a6.72 6.72 0 0 1-1.4 4.116.75.75 0 0 1-1.188-.916 5.22 5.22 0 0 0 1.088-3.2A5.23 5.23 0 0 0 14.162 8.8a.75.75 0 0 1 .136-1.052"
        />
      </svg>
    ))
);
SpeakerHighIcon.displayName = "SpeakerHighIcon";
export { SpeakerHighIcon };
