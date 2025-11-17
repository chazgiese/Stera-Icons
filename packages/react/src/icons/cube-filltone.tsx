import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubeIconFilltone = memo(
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
          <path d="M11 12.589v9.733q.088.018.178.033-.093-.015-.185-.034c-.786-.161-1.51-.575-2.587-1.173l-2.6-1.445c-1.137-.632-1.912-1.048-2.483-1.668a5 5 0 0 1-1.071-1.82c-.264-.8-.252-1.68-.252-2.98v-2.47c0-1.3-.012-2.18.252-2.98l.016-.048zM21.748 7.785c.264.8.252 1.68.252 2.98v2.47c0 1.301.012 2.18-.252 2.98a5 5 0 0 1-1.071 1.82c-.572.62-1.346 1.036-2.484 1.668l-2.6 1.445c-1.077.598-1.8 1.012-2.586 1.173q-.093.018-.186.034.09-.014.179-.033V12.59l8.731-4.852zM10.993 1.679a5 5 0 0 1 2.014 0c.786.162 1.509.575 2.587 1.174l2.6 1.444c1.137.632 1.911 1.048 2.483 1.668l.042.048L12 10.857 3.28 6.012l.042-.047c.571-.62 1.346-1.036 2.483-1.668l2.6-1.444c1.078-.599 1.8-1.012 2.587-1.174" />
        </g>
        <path
          fill="currentColor"
          d="m3.28 6.012 8.721 4.845 8.72-4.844c.45.5.794 1.088 1.011 1.725L13 12.59v9.733a5 5 0 0 1-2 0v-9.734L2.268 7.738A5 5 0 0 1 3.28 6.012"
        />
      </svg>
    ))
);
CubeIconFilltone.displayName = "CubeIconFilltone";
export { CubeIconFilltone };
