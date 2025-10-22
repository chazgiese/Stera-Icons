import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpRightIcon = memo(
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
          d="M7.934 16.066a.75.75 0 0 1 0-1.06l5.791-5.792h-5.26a.75.75 0 1 1 0-1.5h7.07a.75.75 0 0 1 .75.75v7.072a.75.75 0 0 1-1.5 0v-5.261l-5.79 5.79a.75.75 0 0 1-1.06 0"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.399 19.601C.2 15.403.2 8.597 4.399 4.4S15.403.2 19.6 4.399s4.198 11.004 0 15.202-11.004 4.198-15.202 0m1.06-1.06a9.25 9.25 0 0 0 13.082 0 9.25 9.25 0 1 0-13.081 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleUpRightIcon.displayName = "ArrowCircleUpRightIcon";
export { ArrowCircleUpRightIcon };
