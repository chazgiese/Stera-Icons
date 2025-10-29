import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HourglassIconFilltone = memo(
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
          d="M17 1a3 3 0 0 1 3 3v1.116a7 7 0 0 1-2.627 5.466l-1.284 1.027a.5.5 0 0 0 0 .782l1.284 1.027A7 7 0 0 1 20 18.884V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.116a7 7 0 0 1 2.627-5.466l1.284-1.027a.5.5 0 0 0 0-.782l-1.284-1.027A7 7 0 0 1 4 5.116V4a3 3 0 0 1 3-3zM9.438 5.568a1.5 1.5 0 0 0-.937 2.671l1.284 1.028c.384.307.682.672.896 1.068.082.151.19.282.313.394l.006.018c.111.416.25.832.25 1.247q-.001 1.54-.445 3.08l-2.866 2.865A1.5 1.5 0 0 0 9 20.5h6a1.5 1.5 0 0 0 1.06-2.56l-2.866-2.867a11 11 0 0 1-.444-3.079c0-.415.139-.831.25-1.247l.005-.018c.124-.112.232-.242.314-.394a3.5 3.5 0 0 1 .896-1.068l1.284-1.028a1.5 1.5 0 0 0-.82-2.666l-.117-.005z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14.68 5.573a1.5 1.5 0 0 1 .819 2.666l-1.284 1.028a3.5 3.5 0 0 0-.896 1.068c-.082.152-.19.282-.314.394l-.005.018c-.111.416-.25.832-.25 1.247q0 1.54.444 3.08l2.867 2.865A1.5 1.5 0 0 1 15 20.5H9a1.5 1.5 0 0 1-1.06-2.56l2.865-2.867q.444-1.539.445-3.079c0-.415-.139-.831-.25-1.247l-.006-.018a1.5 1.5 0 0 1-.313-.394 3.5 3.5 0 0 0-.896-1.068L8.501 8.239a1.5 1.5 0 0 1 .937-2.67h5.124z"
        />
      </svg>
    ))
);
HourglassIconFilltone.displayName = "HourglassIconFilltone";
export { HourglassIconFilltone };
