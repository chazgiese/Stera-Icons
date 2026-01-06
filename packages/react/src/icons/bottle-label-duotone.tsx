import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BottleLabelIconDuotone = memo(
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
          d="M14.277 2.748q.045.17.06.349l.363 4.731c.02.25.114.489.27.685l1.178 1.47a2.75 2.75 0 0 1 .602 1.718V20A2.75 2.75 0 0 1 14 22.75h-4A2.75 2.75 0 0 1 7.25 20v-8.299c0-.624.213-1.23.603-1.718l1.176-1.47a1.25 1.25 0 0 0 .27-.685l.364-4.731q.015-.18.059-.349l.028.002h1.907a.5.5 0 0 0-.498.462l-.364 4.731A2.75 2.75 0 0 1 10.2 9.45l-1.177 1.47a1.25 1.25 0 0 0-.273.781V20c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-8.299a1.25 1.25 0 0 0-.273-.78L13.8 9.45a2.75 2.75 0 0 1-.595-1.508l-.364-4.731a.5.5 0 0 0-.498-.462h1.907z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.25 18.75h-6.5v-1.5h6.5zM15.25 13.75h-6.5v-1.5h6.5zM14.25 1.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
BottleLabelIconDuotone.displayName = "BottleLabelIconDuotone";
export { BottleLabelIconDuotone };
