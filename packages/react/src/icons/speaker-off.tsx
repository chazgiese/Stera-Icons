import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffIcon = memo(
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
          d="M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-2.72-2.72v.172c0 1.782-2.154 2.674-3.414 1.414l-3.5-3.5a.5.5 0 0 0-.354-.146H7.25a2 2 0 0 1-2-2v-3.5c0-1.085.864-1.967 1.942-1.997L3.47 4.53a.75.75 0 0 1 0-1.06m3.78 6.28a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.414.586l3.5 3.5a.5.5 0 0 0 .854-.354v-1.671L8.69 9.75z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M13.336 4.603c1.26-1.26 3.414-.367 3.414 1.415v5.732a.75.75 0 0 1-1.5 0V6.018a.5.5 0 0 0-.854-.354L12.15 7.911a.75.75 0 0 1-1.06-1.06z"
        />
      </svg>
    ))
);
SpeakerOffIcon.displayName = "SpeakerOffIcon";
export { SpeakerOffIcon };
