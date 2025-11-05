import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowMergeIcon = memo(
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
          d="M8.47 13.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06-1.06zM1.47 2.47a.75.75 0 0 1 1.06 0l7.244 7.242a5.25 5.25 0 0 0 3.711 1.538h5.704l-2.22-2.22a.75.75 0 1 1 1.061-1.06l3.535 3.535.095.115a.75.75 0 0 1-.1.951l-3.534 3.465a.75.75 0 1 1-1.05-1.071l2.26-2.215h-5.75a6.75 6.75 0 0 1-4.774-1.977L1.47 3.53a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
FlowMergeIcon.displayName = "FlowMergeIcon";
export { FlowMergeIcon };
