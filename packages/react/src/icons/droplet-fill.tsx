import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DropletIconFill = memo(
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
          d="M12 1q.053 0 .102.005l.062.009.01.002a1 1 0 0 1 .443.198l.005.004.009.006.02.016.072.059q.095.076.266.22a36.781 36.781 0 0 1 3.762 3.684c1.028 1.169 2.078 2.536 2.875 3.985.792 1.441 1.374 3.033 1.374 4.63C21 18.868 16.991 23 12 23s-9-4.132-9-9.182c0-1.597.582-3.189 1.374-4.63.797-1.449 1.847-2.816 2.875-3.985a37 37 0 0 1 3.762-3.683q.171-.144.266-.221l.073-.059q.011-.01.02-.016l.008-.006.004-.004A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
DropletIconFill.displayName = "DropletIconFill";
export { DropletIconFill };
