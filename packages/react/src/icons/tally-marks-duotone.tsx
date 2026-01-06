import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TallyMarksIconDuotone = memo(
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
          <path d="M6.75 20a.75.75 0 0 1-1.5 0v-3.076l1.5-.9zM10.75 20a.75.75 0 0 1-1.5 0v-5.476l1.5-.899zM14.75 20a.75.75 0 0 1-1.5 0v-7.875l1.5-.9zM18.75 20a.75.75 0 0 1-1.5 0V9.725l1.5-.9zM6 3.25a.75.75 0 0 1 .75.75v10.275l-1.5.9V4A.75.75 0 0 1 6 3.25M10 3.25a.75.75 0 0 1 .75.75v7.875l-1.5.9V4a.75.75 0 0 1 .75-.75M14 3.25a.75.75 0 0 1 .75.75v5.476l-1.5.899V4a.75.75 0 0 1 .75-.75M18 3.25a.75.75 0 0 1 .75.75v3.075l-1.5.9V4a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          fill="currentColor"
          d="M21.615 5.357a.751.751 0 0 1 .771 1.287l-20 12a.75.75 0 0 1-.772-1.287z"
        />
      </svg>
    ))
);
TallyMarksIconDuotone.displayName = "TallyMarksIconDuotone";
export { TallyMarksIconDuotone };
