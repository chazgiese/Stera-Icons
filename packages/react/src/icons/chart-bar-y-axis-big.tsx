import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarYAxisBig = memo(
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
          d="M3 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.75 16.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2zm-7.5 1.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h7.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5zM19.75 9.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H7.25a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2zm-12.5 1.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h12.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5zM16.75 2.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-9.5a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2zm-9.5 1.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h9.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartBarYAxisBig.displayName = "ChartBarYAxisBig";
export { ChartBarYAxisBig };
