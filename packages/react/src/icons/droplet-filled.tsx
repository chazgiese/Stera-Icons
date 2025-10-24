import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DropletIconFilled = memo(
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
          d="M11.378 1.218a1 1 0 0 1 1.244 0l.003.002.006.004.02.017.072.058q.095.077.266.22a36.78 36.78 0 0 1 3.762 3.684c1.028 1.169 2.078 2.537 2.875 3.986.792 1.44 1.374 3.032 1.374 4.63C21 18.869 16.991 23 12 23s-9-4.132-9-9.181c0-1.598.582-3.19 1.374-4.63.797-1.45 1.847-2.817 2.875-3.985a37 37 0 0 1 3.762-3.684q.171-.145.266-.22l.073-.06.02-.016.005-.004z"
        />
        <path
          fill="currentColor"
          d="M11.378 1.217a1 1 0 0 1 1.244 0l.003.002.006.004.02.017.072.058q.095.077.266.221a36.781 36.781 0 0 1 3.762 3.684c1.028 1.168 2.078 2.536 2.875 3.985.792 1.44 1.374 3.032 1.374 4.63C21 18.868 16.991 23 12 23s-9-4.133-9-9.182c0-1.598.582-3.19 1.374-4.63.797-1.45 1.847-2.817 2.875-3.985a37 37 0 0 1 3.762-3.684q.171-.144.266-.22l.073-.06.02-.016.005-.004z"
        />
      </svg>
    ))
);
DropletIconFilled.displayName = "DropletIconFilled";
export { DropletIconFilled };
