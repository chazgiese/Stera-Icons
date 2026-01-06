import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AnnotationIconFillDuotone = memo(
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
          d="M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V12.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H8.875q.124-.481.126-1a4 4 0 0 0-5-3.874V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 6.73 2.544c.593-.302 1.233-.428 1.961-.487C9.41 1.999 10.297 2 11.401 2zM10 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M13 12a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM16 8a1 1 0 1 1 0 2h-6a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
AnnotationIconFillDuotone.displayName = "AnnotationIconFillDuotone";
export { AnnotationIconFillDuotone };
