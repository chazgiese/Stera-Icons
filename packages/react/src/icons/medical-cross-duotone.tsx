import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedicalCrossIconDuotone = memo(
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
          d="M3.75 13.75a.5.5 0 0 0 .5.5H9a.75.75 0 0 1 .75.75v4.75a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5V15a.75.75 0 0 1 .75-.75h4.75a.5.5 0 0 0 .5-.5V12h1.5v1.75a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-4h-4a2 2 0 0 1-2-2V12h1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.75 2.25a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2V12h-1.5v-1.75a.5.5 0 0 0-.5-.5H15a.75.75 0 0 1-.75-.75V4.25a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5V9a.75.75 0 0 1-.75.75H4.25a.5.5 0 0 0-.5.5V12h-1.5v-1.75a2 2 0 0 1 2-2h4v-4a2 2 0 0 1 2-2z"
        />
      </svg>
    ))
);
MedicalCrossIconDuotone.displayName = "MedicalCrossIconDuotone";
export { MedicalCrossIconDuotone };
