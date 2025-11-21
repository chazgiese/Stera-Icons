import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilIconFilled = memo(
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
          d="m18.323 10.883-9.969 9.97a.5.5 0 0 1-.304.144l-5 .5a.502.502 0 0 1-.547-.547l.5-5 .016-.084a.5.5 0 0 1 .128-.22l9.969-9.97zM16.763 2.03a1.75 1.75 0 0 1 2.475 0l2.732 2.733a1.75 1.75 0 0 1 0 2.475l-2.587 2.585-5.207-5.207z"
        />
      </svg>
    ))
);
PencilIconFilled.displayName = "PencilIconFilled";
export { PencilIconFilled };
