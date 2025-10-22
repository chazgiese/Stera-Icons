import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerLowIcon = memo(
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
          d="M11.836 4.603c1.26-1.26 3.414-.367 3.414 1.414v11.965c0 1.782-2.154 2.674-3.414 1.414l-3.5-3.5a.5.5 0 0 0-.354-.146H5.75a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h2.232a.5.5 0 0 0 .354-.147zm1.914 1.414a.5.5 0 0 0-.854-.353l-3.5 3.5a2 2 0 0 1-1.414.586H5.75a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.414.586l3.5 3.5a.5.5 0 0 0 .854-.354z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M17.798 7.746a.75.75 0 0 1 1.052.136 6.73 6.73 0 0 1 1.4 4.116 6.72 6.72 0 0 1-1.4 4.116.75.75 0 1 1-1.188-.915 5.23 5.23 0 0 0 1.088-3.201 5.23 5.23 0 0 0-1.088-3.2.75.75 0 0 1 .136-1.052"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.836 4.605c1.26-1.26 3.414-.367 3.414 1.414v11.965c0 1.782-2.154 2.674-3.414 1.414l-3.5-3.5a.5.5 0 0 0-.354-.146H5.75a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h2.232a.5.5 0 0 0 .354-.147zM13.75 6.02a.5.5 0 0 0-.854-.353l-3.5 3.5a2 2 0 0 1-1.414.586H5.75a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.414.586l3.5 3.5a.5.5 0 0 0 .854-.354z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M17.798 7.748a.75.75 0 0 1 1.052.136A6.73 6.73 0 0 1 20.25 12a6.73 6.73 0 0 1-1.4 4.116.75.75 0 1 1-1.188-.915A5.23 5.23 0 0 0 18.75 12a5.23 5.23 0 0 0-1.088-3.2.75.75 0 0 1 .136-1.052"
        />
      </svg>
    ))
);
SpeakerLowIcon.displayName = "SpeakerLowIcon";
export { SpeakerLowIcon };
