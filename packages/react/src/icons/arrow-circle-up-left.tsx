import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpLeftIcon = memo(
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
          d="M16.066 16.066a.75.75 0 0 1-1.06 0l-5.792-5.791v5.26a.75.75 0 1 1-1.5 0v-7.07a.75.75 0 0 1 .75-.75h7.072a.75.75 0 0 1 0 1.5h-5.261l5.79 5.79a.75.75 0 0 1 0 1.06"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.601 19.601C15.403 23.8 8.597 23.8 4.4 19.601S.2 8.597 4.399 4.4 15.403.2 19.6 4.399s4.198 11.004 0 15.202m-1.06-1.06A9.25 9.25 0 1 0 5.46 5.46a9.25 9.25 0 0 0 13.08 13.08"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleUpLeftIcon.displayName = "ArrowCircleUpLeftIcon";
export { ArrowCircleUpLeftIcon };
