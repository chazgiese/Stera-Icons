import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TimerIconFilltone = memo(
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
          d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12c0-3.175 1.289-6.052 3.368-8.132A1.5 1.5 0 0 1 5.99 5.99 8.47 8.47 0 0 0 3.5 12a8.5 8.5 0 1 0 10-8.366V5.5a1.5 1.5 0 0 1-3 0V2A1.5 1.5 0 0 1 12 .5"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M6.344 6.342a1 1 0 0 1 1.249-.133l5.477 3.544c.303.196.985.608 1.269 1.36a2.501 2.501 0 0 1-3.224 3.224c-.752-.284-1.164-.966-1.36-1.269L6.21 7.591l-.044-.075a1 1 0 0 1 .177-1.174"
        />
      </svg>
    ))
);
TimerIconFilltone.displayName = "TimerIconFilltone";
export { TimerIconFilltone };
