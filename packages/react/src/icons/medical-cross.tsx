import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedicalCrossIcon = memo(
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
          d="M13.75 2.25a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-4h-4a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h4v-4a2 2 0 0 1 2-2zm-3.5 1.5a.5.5 0 0 0-.5.5V9a.75.75 0 0 1-.75.75H4.25a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5H9a.75.75 0 0 1 .75.75v4.75a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5V15a.75.75 0 0 1 .75-.75h4.75a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5H15a.75.75 0 0 1-.75-.75V4.25a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MedicalCrossIcon.displayName = "MedicalCrossIcon";
export { MedicalCrossIcon };
