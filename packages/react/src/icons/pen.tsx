import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenIcon = memo(
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
          d="M18.25 1.871c.998 0 2.032.35 2.78 1.099.748.748 1.099 1.782 1.099 2.78s-.35 2.032-1.099 2.78l-12.5 12.5a.75.75 0 0 1-.456.215l-5 .5a.75.75 0 0 1-.82-.82l.5-5 .023-.127a.75.75 0 0 1 .193-.33L15.47 2.97c.748-.748 1.782-1.099 2.78-1.099M4.219 16.34l-.382 3.821 3.821-.382 9.78-9.78-3.44-3.44zM18.249 3.37c-.665 0-1.296.236-1.719.66l-1.47 1.468 3.439 3.44 1.47-1.47c.424-.423.66-1.053.66-1.719s-.236-1.296-.66-1.72c-.423-.423-1.053-.659-1.72-.659"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PenIcon.displayName = "PenIcon";
export { PenIcon };
