import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeIconFilled = memo(
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
          d="M8.93 3.121a5 5 0 0 1 6.14 0l5 3.89A5 5 0 0 1 22 10.955V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044c0-1.542.713-2.999 1.93-3.946zm2.07 8.38A1.5 1.5 0 0 0 9.5 13v4l.008.153A1.5 1.5 0 0 0 11 18.5h2a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeIconFilled.displayName = "HomeIconFilled";
export { HomeIconFilled };
