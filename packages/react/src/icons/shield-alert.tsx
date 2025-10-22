import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldAlertIcon = memo(
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
          d="M12 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.736 1.298a.75.75 0 0 1 .528 0l8 3A.75.75 0 0 1 20.75 5v5.584a12.75 12.75 0 0 1-7.048 11.403l-1.367.684a.75.75 0 0 1-.67 0l-1.367-.684A12.75 12.75 0 0 1 3.25 10.584V5a.75.75 0 0 1 .486-.702zM4.75 5.519v5.065a11.25 11.25 0 0 0 6.219 10.061l1.031.516 1.031-.516a11.25 11.25 0 0 0 6.219-10.061V5.519L12 2.801z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldAlertIcon.displayName = "ShieldAlertIcon";
export { ShieldAlertIcon };
