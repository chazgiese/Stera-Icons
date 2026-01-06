import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenIconDuotone = memo(
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
          d="M18.25 1.871c.998 0 2.032.35 2.78 1.099.748.748 1.099 1.782 1.099 2.78s-.35 2.032-1.099 2.78l-2.53 2.53-5.56-5.56 2.53-2.53c.748-.748 1.782-1.099 2.78-1.099m0 1.5c-.666 0-1.296.236-1.72.66L15.06 5.5l3.44 3.44 1.47-1.47c.423-.424.659-1.054.659-1.72s-.236-1.296-.66-1.72c-.423-.423-1.053-.659-1.719-.659"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="m12.94 5.5 1.059 1.06-9.803 9.802-.765 4.205 4.203-.763 9.804-9.805L18.5 11.06l-9.97 9.97a.75.75 0 0 1-.396.207l-5.5 1.001a.75.75 0 0 1-.873-.872l1-5.5.03-.111a.75.75 0 0 1 .178-.286z"
        />
      </svg>
    ))
);
PenIconDuotone.displayName = "PenIconDuotone";
export { PenIconDuotone };
