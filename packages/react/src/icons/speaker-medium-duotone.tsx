import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerMediumIconDuotone = memo(
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
          d="M10.086 4.604c1.26-1.26 3.414-.368 3.414 1.414v11.965c0 1.781-2.154 2.673-3.414 1.414l-3.5-3.5a.5.5 0 0 0-.354-.147H4a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h2.232a.5.5 0 0 0 .354-.146zM12 6.018a.5.5 0 0 0-.854-.354l-3.5 3.5a2 2 0 0 1-1.414.586H4a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.414.586l3.5 3.5a.5.5 0 0 0 .854-.353z"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M18.905 5.548a.75.75 0 0 1 1.051.141A9.96 9.96 0 0 1 22 11.748c0 2.43-.868 4.66-2.31 6.393a.75.75 0 0 1-1.154-.959 8.47 8.47 0 0 0 1.964-5.434c0-1.936-.647-3.72-1.736-5.149a.75.75 0 0 1 .141-1.051" />
          <path d="M16.048 7.746a.75.75 0 0 1 1.052.136 6.73 6.73 0 0 1 1.4 4.116 6.73 6.73 0 0 1-1.4 4.116.75.75 0 1 1-1.188-.915A5.23 5.23 0 0 0 17 11.998a5.22 5.22 0 0 0-1.088-3.2.75.75 0 0 1 .136-1.052" />
        </g>
      </svg>
    ))
);
SpeakerMediumIconDuotone.displayName = "SpeakerMediumIconDuotone";
export { SpeakerMediumIconDuotone };
