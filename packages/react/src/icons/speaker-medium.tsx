import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerMediumIcon = memo(
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
          d="M10.086 4.603c1.26-1.26 3.414-.367 3.414 1.414v11.965c0 1.782-2.154 2.674-3.414 1.414l-3.5-3.5a.5.5 0 0 0-.354-.146H4a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h2.232a.5.5 0 0 0 .354-.147zM12 6.017a.5.5 0 0 0-.854-.353l-3.5 3.5a2 2 0 0 1-1.414.586H4a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.414.586l3.5 3.5a.5.5 0 0 0 .854-.354z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18.905 5.548a.75.75 0 0 1 1.051.141A9.96 9.96 0 0 1 22 11.748c0 2.43-.868 4.66-2.31 6.394a.75.75 0 0 1-1.154-.96 8.46 8.46 0 0 0 1.964-5.434 8.46 8.46 0 0 0-1.736-5.149.75.75 0 0 1 .141-1.051"
        />
        <path
          fill="currentColor"
          d="M16.048 7.746a.75.75 0 0 1 1.052.136 6.73 6.73 0 0 1 1.4 4.116 6.72 6.72 0 0 1-1.4 4.116.75.75 0 1 1-1.188-.915A5.23 5.23 0 0 0 17 11.998a5.23 5.23 0 0 0-1.088-3.2.75.75 0 0 1 .136-1.052"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.086 4.605c1.26-1.26 3.414-.367 3.414 1.414v11.965c0 1.782-2.154 2.674-3.414 1.414l-3.5-3.5a.5.5 0 0 0-.354-.146H4a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h2.232a.5.5 0 0 0 .354-.147zM12 6.02a.5.5 0 0 0-.854-.353l-3.5 3.5a2 2 0 0 1-1.414.586H4a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.414.586l3.5 3.5a.5.5 0 0 0 .854-.354z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18.905 5.55a.75.75 0 0 1 1.051.141A9.96 9.96 0 0 1 22 11.75c0 2.43-.868 4.66-2.31 6.393a.75.75 0 0 1-1.154-.959A8.46 8.46 0 0 0 20.5 11.75 8.46 8.46 0 0 0 18.764 6.6a.75.75 0 0 1 .141-1.051"
        />
        <path
          fill="currentColor"
          d="M16.048 7.748a.75.75 0 0 1 1.052.136A6.73 6.73 0 0 1 18.5 12a6.73 6.73 0 0 1-1.4 4.116.75.75 0 1 1-1.188-.915A5.23 5.23 0 0 0 17 12a5.23 5.23 0 0 0-1.088-3.2.75.75 0 0 1 .136-1.052"
        />
      </svg>
    ))
);
SpeakerMediumIcon.displayName = "SpeakerMediumIcon";
export { SpeakerMediumIcon };
