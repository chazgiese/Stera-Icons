import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FastForwardIconFillDuotone = memo(
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
          d="M13.977 5.768c.373.003.698.134.947.253.29.14.634.348 1.014.576l5.29 3.174c.36.216.69.413.941.596.248.182.548.44.72.832a2 2 0 0 1 0 1.602c-.172.392-.472.65-.72.832-.25.183-.581.38-.942.597l-5.29 3.173c-.38.228-.723.436-1.013.576-.285.137-.669.288-1.11.247a2 2 0 0 1-1.426-.808c-.262-.357-.33-.765-.36-1.08a8 8 0 0 1-.025-.535l-.003-.63V8.827c0-.442-.001-.844.028-1.165.03-.314.098-.722.36-1.079.338-.46.857-.755 1.427-.808z"
        />
        <path
          fill="currentColor"
          d="M2.977 5.768c.373.003.698.134.947.253.29.14.634.348 1.014.576l5.29 3.174c.36.216.69.413.941.596.248.182.548.44.72.832a2 2 0 0 1 0 1.602c-.172.392-.472.65-.72.832-.25.183-.581.38-.942.597l-5.29 3.173c-.38.228-.723.436-1.013.576-.285.137-.669.288-1.11.247a2 2 0 0 1-1.426-.808c-.262-.357-.33-.765-.36-1.08-.03-.32-.028-.722-.028-1.164V8.826c0-.442-.001-.844.028-1.165.03-.314.098-.722.36-1.079.338-.46.857-.755 1.426-.808z"
          opacity={0.4}
        />
      </svg>
    ))
);
FastForwardIconFillDuotone.displayName = "FastForwardIconFillDuotone";
export { FastForwardIconFillDuotone };
