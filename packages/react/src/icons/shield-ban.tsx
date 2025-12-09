import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldBanIcon = memo(
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
          d="M11.736 1.298a.75.75 0 0 1 .528 0l8 3A.75.75 0 0 1 20.75 5v5.584a12.75 12.75 0 0 1-7.048 11.403l-1.367.684a.75.75 0 0 1-.67 0l-1.367-.684A12.75 12.75 0 0 1 3.25 10.584V5q0-.03.004-.057 0-.022.003-.044a1 1 0 0 1 .028-.126l.01-.026a.8.8 0 0 1 .15-.252l.01-.01.028-.029a.8.8 0 0 1 .163-.117q.027-.014.054-.025.018-.009.036-.016zM4.75 10.584a11.25 11.25 0 0 0 6.219 10.061l1.031.516 1.031-.516c1.64-.82 3.02-2.01 4.06-3.437L4.75 6.63zm.701-5.328 12.447 10.669a11.24 11.24 0 0 0 1.352-5.341V5.519L12 2.801z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldBanIcon.displayName = "ShieldBanIcon";
export { ShieldBanIcon };
