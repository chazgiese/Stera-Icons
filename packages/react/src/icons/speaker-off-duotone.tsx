import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffIconDuotone = memo(
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
          <path d="M8.69 9.75H7.25a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h2.232a2 2 0 0 1 1.415.586l3.5 3.5a.5.5 0 0 0 .853-.353V16.31l1.5 1.5v.172c0 1.781-2.154 2.673-3.414 1.414l-3.5-3.5a.5.5 0 0 0-.354-.147H7.25a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 1.941-1.998zM13.336 4.604c1.26-1.26 3.414-.368 3.414 1.414v5.732a.75.75 0 0 1-1.5 0V6.018a.5.5 0 0 0-.854-.354L12.15 7.911a.75.75 0 0 1-1.06-1.06z" />
        </g>
        <path
          fill="currentColor"
          d="M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
SpeakerOffIconDuotone.displayName = "SpeakerOffIconDuotone";
export { SpeakerOffIconDuotone };
