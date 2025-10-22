import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleDownLeftIcon = memo(
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
          d="M16.066 7.934a.75.75 0 0 1 0 1.06l-5.791 5.792h5.26a.75.75 0 1 1 0 1.5h-7.07a.75.75 0 0 1-.75-.75V8.464a.75.75 0 1 1 1.5 0v5.261l5.79-5.79a.75.75 0 0 1 1.06 0"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.601 4.399c4.198 4.198 4.198 11.004 0 15.202S8.597 23.8 4.4 19.601.2 8.597 4.399 4.4 15.403.2 19.6 4.399m-1.06 1.06A9.25 9.25 0 1 0 5.459 18.541 9.25 9.25 0 0 0 18.541 5.459"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleDownLeftIcon.displayName = "ArrowCircleDownLeftIcon";
export { ArrowCircleDownLeftIcon };
