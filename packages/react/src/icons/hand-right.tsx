import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandRightIcon = memo(
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
          d="M14 1.25A2.75 2.75 0 0 1 16.75 4v.553a2.75 2.75 0 0 1 4 2.447v7a8.75 8.75 0 0 1-17.365 1.53l-1.183-3.022a2.747 2.747 0 0 1 4.796-2.683l.252.428V5a2.75 2.75 0 0 1 4.31-2.265A2.75 2.75 0 0 1 14 1.25m0 1.5c-.69 0-1.25.56-1.25 1.25v7a.75.75 0 0 1-1.5 0V5a1.25 1.25 0 0 0-2.5 0v8a.75.75 0 0 1-1.395.38l-1.648-2.792-.004-.006a1.247 1.247 0 0 0-1.708-.458 1.25 1.25 0 0 0-.516 1.594l.059.114.048.1 1.222 3.117.024.074a1 1 0 0 1 .017.077A7.25 7.25 0 0 0 19.25 14V7a1.25 1.25 0 0 0-2.5 0v4.5a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HandRightIcon.displayName = "HandRightIcon";
export { HandRightIcon };
