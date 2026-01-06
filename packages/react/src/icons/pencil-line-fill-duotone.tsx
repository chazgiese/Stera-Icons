import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilLineIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M21 19.5a1 1 0 0 1 0 2H3q-.024-.001-.048-.005a.5.5 0 0 0 .098.002l5-.5a.5.5 0 0 0 .304-.145L9.706 19.5zM2.503 21.038Q2.5 21.02 2.5 21q0-.02.003-.04a1 1 0 0 0 0 .078" />
        </g>
        <path
          fill="currentColor"
          d="m18.322 10.883-9.969 9.97a.5.5 0 0 1-.304.144l-5 .5a.5.5 0 0 1-.547-.548l.5-5 .016-.084a.5.5 0 0 1 .128-.22l9.969-9.97zM16.763 2.03a1.75 1.75 0 0 1 2.474 0l2.733 2.732a1.75 1.75 0 0 1 0 2.475l-2.587 2.585-5.207-5.207z"
        />
      </svg>
    ))
);
PencilLineIconFillDuotone.displayName = "PencilLineIconFillDuotone";
export { PencilLineIconFillDuotone };
