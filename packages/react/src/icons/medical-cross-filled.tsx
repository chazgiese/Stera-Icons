import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedicalCrossIconFilled = memo(
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
          d="M13.75 2A2.25 2.25 0 0 1 16 4.25V8h3.75A2.25 2.25 0 0 1 22 10.25v3.5A2.25 2.25 0 0 1 19.75 16H16v3.75A2.25 2.25 0 0 1 13.75 22h-3.5A2.25 2.25 0 0 1 8 19.75V16H4.25A2.25 2.25 0 0 1 2 13.75v-3.5A2.25 2.25 0 0 1 4.25 8H8V4.25A2.25 2.25 0 0 1 10.25 2z"
        />
      </svg>
    ))
);
MedicalCrossIconFilled.displayName = "MedicalCrossIconFilled";
export { MedicalCrossIconFilled };
