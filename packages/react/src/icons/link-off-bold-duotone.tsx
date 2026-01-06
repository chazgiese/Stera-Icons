import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LinkOffIconBoldDuotone = memo(
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
          <path d="M6.057 10.46a1.001 1.001 0 0 1 1.415 1.414l-1.508 1.508a3.291 3.291 0 0 0 4.654 4.654l1.508-1.508a1 1 0 0 1 1.414 1.415l-1.507 1.507a5.292 5.292 0 0 1-7.483-7.483zM11.967 4.55a5.292 5.292 0 0 1 7.483 7.483l-1.507 1.507a1.001 1.001 0 0 1-1.415-1.414l1.508-1.508a3.291 3.291 0 0 0-4.654-4.654l-1.508 1.508a1 1 0 0 1-1.414-1.415z" />
        </g>
        <path
          fill="currentColor"
          d="M4.182 4.182a1 1 0 0 1 1.414 0l14.223 14.222a1.001 1.001 0 0 1-1.415 1.415L4.182 5.595a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
LinkOffIconBoldDuotone.displayName = "LinkOffIconBoldDuotone";
export { LinkOffIconBoldDuotone };
