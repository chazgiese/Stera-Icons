import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TimerIconLinetone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12c0-3.037 1.232-5.789 3.222-7.778a1 1 0 0 1 1.414 1.414A8.97 8.97 0 0 0 3 12a9 9 0 1 0 10-8.943V5.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.52 6.519a.75.75 0 0 1 .938-.1l5.477 3.544c.317.205.92.577 1.17 1.24a2.25 2.25 0 0 1-2.9 2.9c-.663-.25-1.036-.853-1.24-1.17L6.42 7.457l-.062-.115a.75.75 0 0 1 .161-.822"
        />
      </svg>
    ))
);
TimerIconLinetone.displayName = "TimerIconLinetone";
export { TimerIconLinetone };
