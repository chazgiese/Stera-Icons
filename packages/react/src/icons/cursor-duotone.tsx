import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorIconDuotone = memo(
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
          d="M4.867 4.117a.38.38 0 0 0-.094.4L10.01 20.23c.12.36.626.356.744 0l1.39-6.556c.11-.52.369-.998.745-1.374l.08-.08 1.061 1.06-.08.08c-.17.172-.29.389-.34.626l-1.397 6.597-.015.057c-.523 1.778-3.025 1.823-3.61.064L3.35 4.993a1.88 1.88 0 0 1 .457-1.937z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3.807 3.057A1.88 1.88 0 0 1 5.744 2.6l15.712 5.238c1.758.586 1.713 3.089-.064 3.612-1.365.401-2.45.584-3.487.75-1.035.165-2.01.312-3.219.638-.187.05-.366.154-.516.304l-.14.14-1.06-1.06.14-.14a2.66 2.66 0 0 1 1.186-.693c1.297-.349 2.349-.506 3.372-.67 1.022-.163 2.03-.334 3.3-.707a.393.393 0 0 0 .013-.75L5.27 4.022a.38.38 0 0 0-.403.095z"
        />
      </svg>
    ))
);
CursorIconDuotone.displayName = "CursorIconDuotone";
export { CursorIconDuotone };
