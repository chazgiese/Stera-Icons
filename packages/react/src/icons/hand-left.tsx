import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandLeftIcon = memo(
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
          d="M10 1.25c1.062 0 1.983.603 2.44 1.485A2.75 2.75 0 0 1 16.75 5v5.253l.253-.428a2.747 2.747 0 0 1 3.753-1 2.747 2.747 0 0 1 1.043 3.683l-1.184 3.022A8.75 8.75 0 0 1 3.25 14V7a2.75 2.75 0 0 1 4-2.447V4A2.75 2.75 0 0 1 10 1.25m0 1.5c-.69 0-1.25.56-1.25 1.25v7.5a.75.75 0 0 1-1.5 0V7a1.25 1.25 0 0 0-2.5 0v7a7.25 7.25 0 0 0 14.401 1.2 1 1 0 0 1 .017-.077l.024-.074 1.222-3.116.049-.101.058-.114a1.25 1.25 0 0 0-2.223-1.136l-.004.006-1.649 2.793A.75.75 0 0 1 15.25 13V5a1.25 1.25 0 0 0-2.5 0v6a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HandLeftIcon.displayName = "HandLeftIcon";
export { HandLeftIcon };
