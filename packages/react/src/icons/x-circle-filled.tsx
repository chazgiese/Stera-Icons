import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const XCircleFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M9.176 7.753a1 1 0 0 0-1.414 1.414L10.594 12l-2.832 2.833a1 1 0 0 0 1.414 1.414l2.832-2.833 2.825 2.824a1 1 0 0 0 1.414-1.414L13.423 12l2.824-2.824a1 1 0 0 0-1.414-1.414l-2.825 2.824z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
XCircleFilled.displayName = "XCircleFilled";
export { XCircleFilled };
