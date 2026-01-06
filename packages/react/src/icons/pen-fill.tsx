import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenIconFill = memo(
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
          d="M18.322 11.236 8.53 21.03a.75.75 0 0 1-.397.208l-5.5 1.001a.75.75 0 0 1-.872-.872l1-5.5.03-.111a.75.75 0 0 1 .178-.286l9.792-9.793zM18.25 1.871c.997 0 2.032.35 2.78 1.099.748.748 1.098 1.782 1.098 2.78s-.35 2.032-1.098 2.78l-1.294 1.292-5.56-5.56 1.293-1.292c.748-.748 1.783-1.099 2.78-1.099"
        />
      </svg>
    ))
);
PenIconFill.displayName = "PenIconFill";
export { PenIconFill };
