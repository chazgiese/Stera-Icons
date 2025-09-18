import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsCollapseAlt = memo(
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
          d="M20 13.25a.75.75 0 0 1 0 1.5h-4.19l5.72 5.72a.75.75 0 1 1-1.06 1.06l-5.72-5.72V20a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75zM2.47 2.47a.75.75 0 0 1 1.06 0l5.72 5.72V4a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h4.19L2.47 3.53a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ArrowsCollapseAlt.displayName = "ArrowsCollapseAlt";
export { ArrowsCollapseAlt };
