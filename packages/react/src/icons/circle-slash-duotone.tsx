import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleSlashIconDuotone = memo(
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
          <path d="M4.951 6.012a9.25 9.25 0 0 0 13.036 13.036l1.063 1.062A10.7 10.7 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12c0-2.699.996-5.163 2.639-7.05zM12 1.25c5.937 0 10.75 4.813 10.75 10.75 0 2.698-.997 5.162-2.64 7.05l-1.062-1.063A9.25 9.25 0 0 0 6.012 4.951L4.949 3.89A10.7 10.7 0 0 1 12 1.25" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.887 4.947q.493-.567 1.06-1.06l15.166 15.166q-.493.567-1.06 1.06z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleSlashIconDuotone.displayName = "CircleSlashIconDuotone";
export { CircleSlashIconDuotone };
