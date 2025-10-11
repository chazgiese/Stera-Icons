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
          d="M8.93 3.12a5 5 0 0 1 6.14 0l5 3.89A5 5 0 0 1 22 10.955V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044a5 5 0 0 1 1.93-3.947zM13.905 10c-.845 0-1.573.497-1.904 1.211A2.1 2.1 0 0 0 10.096 10C8.939 10 8 10.93 8 12.076c0 .897.49 1.605.688 1.88C9.64 15.276 10.963 16.177 12 17c1.037-.823 2.36-1.723 3.313-3.044.198-.275.687-.982.687-1.88A2.087 2.087 0 0 0 13.904 10"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeHeartIconFilled.displayName = "HomeHeartIconFilled";
export { HomeHeartIconFilled };
