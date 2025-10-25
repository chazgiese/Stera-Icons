import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeHeartIconFilled = memo(
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
          d="M9.237 2.883a4.5 4.5 0 0 1 5.526 0l5.5 4.278A4.5 4.5 0 0 1 22 10.713v6.788a4.5 4.5 0 0 1-4.5 4.5h-11a4.5 4.5 0 0 1-4.5-4.5v-6.788a4.5 4.5 0 0 1 1.737-3.552zm4.667 7.118c-.845 0-1.573.497-1.904 1.211a2.1 2.1 0 0 0-1.904-1.21C8.939 10.001 8 10.93 8 12.077c0 .897.49 1.603.688 1.878.952 1.321 2.275 2.223 3.312 3.045 1.037-.822 2.36-1.724 3.313-3.045.198-.275.687-.981.687-1.878A2.086 2.086 0 0 0 13.904 10"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeHeartIconFilled.displayName = "HomeHeartIconFilled";
export { HomeHeartIconFilled };
