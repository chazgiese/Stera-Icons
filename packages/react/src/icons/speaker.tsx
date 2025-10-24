import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerIcon = memo(
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
          d="M13.336 4.604c1.26-1.26 3.414-.368 3.414 1.414v11.965c0 1.781-2.154 2.673-3.414 1.414l-3.5-3.5a.5.5 0 0 0-.354-.147H7.25a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h2.232a.5.5 0 0 0 .354-.146zm1.914 1.414a.5.5 0 0 0-.854-.354l-3.5 3.5a2 2 0 0 1-1.414.586H7.25a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.415.586l3.5 3.5a.5.5 0 0 0 .853-.353z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.336 4.605c1.26-1.26 3.414-.367 3.414 1.414v11.965c0 1.782-2.154 2.674-3.414 1.414l-3.5-3.5a.5.5 0 0 0-.354-.146H7.25a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h2.232a.5.5 0 0 0 .354-.147zM15.25 6.02a.5.5 0 0 0-.854-.353l-3.5 3.5a2 2 0 0 1-1.414.586H7.25a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.415.586l3.5 3.5a.5.5 0 0 0 .853-.354z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SpeakerIcon.displayName = "SpeakerIcon";
export { SpeakerIcon };
