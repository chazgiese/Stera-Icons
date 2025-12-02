import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartCandleIcon = memo(
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
          d="M7 1.25a.75.75 0 0 1 .75.75v2.25h.75a2.25 2.25 0 0 1 2.25 2.25v11a2.25 2.25 0 0 1-2.25 2.25h-.75V22a.75.75 0 0 1-1.5 0v-2.25H5.5a2.25 2.25 0 0 1-2.25-2.25v-11A2.25 2.25 0 0 1 5.5 4.25h.75V2A.75.75 0 0 1 7 1.25m-1.5 4.5a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-11a.75.75 0 0 0-.75-.75zM17 3.25a.75.75 0 0 1 .75.75v2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7a2.25 2.25 0 0 1-2.25 2.25h-.75V20a.75.75 0 0 1-1.5 0v-2.25h-.75a2.25 2.25 0 0 1-2.25-2.25v-7a2.25 2.25 0 0 1 2.25-2.25h.75V4a.75.75 0 0 1 .75-.75m-1.5 4.5a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartCandleIcon.displayName = "ChartCandleIcon";
export { ChartCandleIcon };
