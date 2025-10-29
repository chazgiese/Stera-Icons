import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullLeftIconLinetone = memo(
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
          <path d="M15.165 19.984A1 1 0 0 1 15 20q-.085-.001-.166-.016.165.028.331 0M15.995 19.103q-.004.03-.01.062.006-.034.01-.07zM15.9 4.566q.098.2.1.434v14a1 1 0 0 0-.293-.707L14 16.586V7.414l1.707-1.707a1 1 0 0 0 .193-1.14M15.636 4.229l.071.064a1 1 0 0 0-.075-.067z" />
        </g>
        <path
          fill="currentColor"
          d="M14.293 4.293a1 1 0 1 1 1.414 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414z"
        />
      </svg>
    ))
);
ChevronFullLeftIconLinetone.displayName = "ChevronFullLeftIconLinetone";
export { ChevronFullLeftIconLinetone };
