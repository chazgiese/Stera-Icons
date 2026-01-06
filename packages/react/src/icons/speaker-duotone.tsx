import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerIconDuotone = memo(
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
          d="M9.47 8.47A.75.75 0 0 0 10 9.75H7.25a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5H10a.75.75 0 0 0-.53 1.28l.22.22H7.25a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h2.44z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.336 4.604c1.26-1.26 3.414-.368 3.414 1.414v11.965c0 1.781-2.154 2.673-3.414 1.414L9.47 15.53a.75.75 0 0 1 1.06-1.06l3.867 3.866a.5.5 0 0 0 .853-.353V6.018a.5.5 0 0 0-.853-.354L10.53 9.53a.75.75 0 0 1-1.06-1.06z"
        />
      </svg>
    ))
);
SpeakerIconDuotone.displayName = "SpeakerIconDuotone";
export { SpeakerIconDuotone };
