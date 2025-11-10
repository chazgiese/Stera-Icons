import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SnowflakeIconLinetone = memo(
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
          <path d="M12.999 20.231V22a1 1 0 1 1-2 0v-1.769l1-.577zM5.37 15.827v1.154l-1.531.885a1 1 0 0 1-1-1.732l1.531-.885zM21.159 16.134a1 1 0 0 1-1 1.732l-1.531-.885v-1.154l1-.578zM12.999 10.268l3.629-2.096v.578a1 1 0 0 0 .5.866l.499.288L13.999 12l3.63 2.096-.5.29a1 1 0 0 0-.5.865l-.001.577-3.63-2.096v4.192l-.5-.288a1 1 0 0 0-.88-.059l-.12.059-.5.288V13.73L7.37 15.826v-.576a1 1 0 0 0-.39-.792l-.11-.073-.502-.29 3.63-2.096L6.37 9.904l.5-.288c.27-.156.45-.428.491-.733l.009-.133v-.578l3.629 2.096v-4.19l.5.288c.309.179.69.178 1 0l.5-.289zM2.473 6.5a1 1 0 0 1 1.366-.366l1.531.884v1.155l-1 .577-1.531-.884A1 1 0 0 1 2.473 6.5M20.159 6.134a1 1 0 0 1 1 1.732l-1.532.884-1-.577V7.018zM11.999 1a1 1 0 0 1 1 1v1.768l-1 .578-1-.578V2a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M11.619 17.576a1 1 0 0 1 .88.058l3 1.732a1 1 0 0 1-1 1.732L12 19.654l-2.5 1.444a1 1 0 0 1-1-1.732l3-1.732zM2.505 13.017a1 1 0 0 1 1.366-.365l3 1.733.11.073a1 1 0 0 1 .39.792v3.464a1.001 1.001 0 0 1-2 0v-2.887l-2.5-1.443a1 1 0 0 1-.366-1.367M20.129 12.652a1 1 0 0 1 1 1.732l-2.5 1.443v2.887a1 1 0 1 1-2 0V15.25a1 1 0 0 1 .5-.866zM6.37 4.286a1 1 0 0 1 1 1V8.75l-.008.133a1 1 0 0 1-.491.733l-3 1.732a1 1 0 0 1-1-1.732l2.5-1.443V5.286a1 1 0 0 1 1-1M17.629 4.286a1 1 0 0 1 1 1v2.887l2.5 1.443a1 1 0 0 1-1 1.732l-3-1.732a1 1 0 0 1-.5-.866V5.286a1 1 0 0 1 1-1M14.5 2.902a1 1 0 0 1 1 1.733l-3 1.731a1 1 0 0 1-1 0l-3-1.731a1 1 0 0 1 1-1.733L12 4.345z"
        />
      </svg>
    ))
);
SnowflakeIconLinetone.displayName = "SnowflakeIconLinetone";
export { SnowflakeIconLinetone };
