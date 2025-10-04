import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarXAxisBig = memo(
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
          d="M21 20.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.75 5.25a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v9.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-9.5a.5.5 0 0 0-.5-.5zM12.75 2.25a2 2 0 0 1 2 2v12.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2V4.25a2 2 0 0 1 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v12.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5V4.25a.5.5 0 0 0-.5-.5zM19.75 7.25a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-7.5a2 2 0 0 1 2-2zm-1.5 1.5a.5.5 0 0 0-.5.5v7.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-7.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartBarXAxisBig.displayName = "ChartBarXAxisBig";
export { ChartBarXAxisBig };
