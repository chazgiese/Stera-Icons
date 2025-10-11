import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BottleLabelIcon = memo(
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
          d="M14.25 1.25a.75.75 0 0 1 .027 1.498q.045.17.06.349l.363 4.731c.02.25.114.489.27.685l1.178 1.47a2.75 2.75 0 0 1 .602 1.718V20A2.75 2.75 0 0 1 14 22.75h-4A2.75 2.75 0 0 1 7.25 20v-8.299c0-.624.213-1.23.603-1.718l1.176-1.47a1.25 1.25 0 0 0 .27-.685l.364-4.731q.015-.18.059-.349A.749.749 0 0 1 9.75 1.25zm-5.5 17.5V20c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-1.25zm0-5v3.5h6.5v-3.5zm2.907-11a.5.5 0 0 0-.498.462l-.364 4.731A2.75 2.75 0 0 1 10.2 9.45l-1.177 1.47a1.25 1.25 0 0 0-.273.781v.549h6.5v-.549a1.25 1.25 0 0 0-.273-.78L13.8 9.45a2.75 2.75 0 0 1-.595-1.508l-.364-4.731a.5.5 0 0 0-.498-.462z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BottleLabelIcon.displayName = "BottleLabelIcon";
export { BottleLabelIcon };
