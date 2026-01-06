import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskIconBoldDuotone = memo(
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
          <path d="M11 12.568v1.159L3.843 17.86a1 1 0 0 1-1-1.731l7.162-4.136zM21.168 16.13a1 1 0 1 1-1 1.731L13 13.721v-1.147l1.005-.58zM12 1a1 1 0 0 1 1 1v8.264l-.995.575L11 10.258V2a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M20.163 6.13a1 1 0 0 1 1 1.732L13 12.574V22a1 1 0 1 1-2 0v-9.432L2.847 7.862a1 1 0 0 1 1-1.733l8.158 4.71z"
        />
      </svg>
    ))
);
AstriskIconBoldDuotone.displayName = "AstriskIconBoldDuotone";
export { AstriskIconBoldDuotone };
