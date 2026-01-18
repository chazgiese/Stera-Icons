import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ActivityIconBold = memo(
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
          d="M9 2a1 1 0 0 1 .948.684L15 17.838l1.768-5.3A2.25 2.25 0 0 1 18.9 11H22a1 1 0 1 1 0 2h-3.099a.25.25 0 0 0-.237.17l-2.716 8.146a1 1 0 0 1-1.896 0L9 6.161l-1.767 5.3A2.25 2.25 0 0 1 5.1 13H2a1 1 0 1 1 0-2h3.099a.25.25 0 0 0 .237-.17l2.716-8.146.061-.147A1 1 0 0 1 9 2"
        />
      </svg>
    ))
);
ActivityIconBold.displayName = "ActivityIconBold";
export { ActivityIconBold };
