import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrendDownIcon = memo(
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
          d="M22.5 19.75a1 1 0 0 0 .13-.012q.01 0 .018-.003.02-.005.04-.011.05-.013.098-.03a.75.75 0 0 0 .362-.324q.025-.04.044-.083A.8.8 0 0 0 23.25 19v-6a.75.75 0 0 0-1.5 0v4.19l-8.22-8.22a.75.75 0 0 0-1.06 0L9.5 11.94 2.03 4.47A.75.75 0 1 0 .97 5.53l8 8 .114.094a.75.75 0 0 0 .946-.094L13 10.56l7.69 7.69H16.5a.75.75 0 1 0 0 1.5z"
        />
      </svg>
    ))
);
TrendDownIcon.displayName = "TrendDownIcon";
export { TrendDownIcon };
