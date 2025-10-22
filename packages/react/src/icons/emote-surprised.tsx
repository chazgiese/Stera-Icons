import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EmoteSurprisedIcon = memo(
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
          d="M12 13.75c1.116 0 2.157.125 2.928.458.387.167.718.393.954.692.238.304.368.671.368 1.1s-.13.796-.368 1.1c-.236.3-.567.525-.954.692-.771.333-1.812.458-2.928.458s-2.157-.125-2.928-.458c-.387-.167-.718-.393-.954-.692A1.74 1.74 0 0 1 7.75 16c0-.429.13-.796.368-1.1.236-.3.567-.525.954-.692.771-.333 1.812-.458 2.928-.458M8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
EmoteSurprisedIcon.displayName = "EmoteSurprisedIcon";
export { EmoteSurprisedIcon };
