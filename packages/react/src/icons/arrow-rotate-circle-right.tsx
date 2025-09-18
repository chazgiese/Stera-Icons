import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowRotateCircleRight = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5m.47 2.72a.75.75 0 0 1 1.06 0l2.93 2.93a.85.85 0 0 1 0 1.2l-2.93 2.93a.75.75 0 1 1-1.06-1.06l1.72-1.72H11.5a3.25 3.25 0 1 0 2.655 5.125.75.75 0 0 1 1.225.866A4.75 4.75 0 1 1 11.5 8.25h2.69l-1.72-1.72a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ArrowRotateCircleRight.displayName = "ArrowRotateCircleRight";
export { ArrowRotateCircleRight };
