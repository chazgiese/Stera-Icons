import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerBallIconFilled = memo(
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
          d="M12 1.25c1.261 0 2.471.22 3.596.618l.006-.004.005.008C19.77 3.355 22.75 7.33 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.671 2.98-8.645 7.142-10.128l.005-.008.006.004A10.7 10.7 0 0 1 12 1.25M8.793 17.937l1.255 3.105a9.3 9.3 0 0 0 3.903 0l1.256-3.106-1.589-2.186h-3.236zm-5.944-4.59a9.2 9.2 0 0 0 1.249 3.464l3.482.244 1.562-2.152-1.199-2.796-2.609-.847zm13.207-1.24-1.199 2.795 1.563 2.153 3.481-.244a9.2 9.2 0 0 0 1.25-3.464l-2.485-2.087zM8.253 3.542a9.3 9.3 0 0 0-3.385 2.566l.93 3.725 2.533.823 2.919-2.502V5.415zm4.497 1.873v2.74l2.918 2.501 2.534-.823.929-3.725a9.3 9.3 0 0 0-3.385-2.566z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SoccerBallIconFilled.displayName = "SoccerBallIconFilled";
export { SoccerBallIconFilled };
