import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EmoteSurprisedIconDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 14.25c1.093 0 2.053.125 2.73.417q.505.218.76.542c.166.212.26.47.26.791s-.094.579-.26.791q-.255.324-.76.542c-.678.292-1.637.417-2.73.417s-2.052-.125-2.73-.417q-.504-.218-.76-.542A1.24 1.24 0 0 1 8.25 16c0-.321.094-.579.26-.791q.255-.324.76-.542c.678-.292 1.637-.417 2.73-.417M8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
EmoteSurprisedIconDuotone.displayName = "EmoteSurprisedIconDuotone";
export { EmoteSurprisedIconDuotone };
