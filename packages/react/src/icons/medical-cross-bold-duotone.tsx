import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedicalCrossIconBoldDuotone = memo(
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
          d="M4 13.75c0 .138.112.25.25.25H9l.103.005A1 1 0 0 1 10 15v4.75c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V15a1 1 0 0 1 1-1h4.75a.25.25 0 0 0 .25-.25V12h2v1.75A2.25 2.25 0 0 1 19.75 16H16v3.75A2.25 2.25 0 0 1 13.75 22h-3.5A2.25 2.25 0 0 1 8 19.75V16H4.25A2.25 2.25 0 0 1 2 13.75V12h2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.75 2A2.25 2.25 0 0 1 16 4.25V8h3.75A2.25 2.25 0 0 1 22 10.25V12h-2v-1.75a.25.25 0 0 0-.25-.25H15a1 1 0 0 1-1-1V4.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25V9a1 1 0 0 1-1 1H4.25a.25.25 0 0 0-.25.25V12H2v-1.75A2.25 2.25 0 0 1 4.25 8H8V4.25A2.25 2.25 0 0 1 10.25 2z"
        />
      </svg>
    ))
);
MedicalCrossIconBoldDuotone.displayName = "MedicalCrossIconBoldDuotone";
export { MedicalCrossIconBoldDuotone };
