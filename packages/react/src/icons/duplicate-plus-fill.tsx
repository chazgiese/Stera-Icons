import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DuplicatePlusIconFill = memo(
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
          d="M15.4 7c.964 0 1.747-.001 2.38.05.646.054 1.224.166 1.763.44a4.5 4.5 0 0 1 1.967 1.967c.274.539.386 1.117.44 1.763.051.633.05 1.416.05 2.38v1.8c0 .964.001 1.747-.05 2.38-.053.646-.166 1.224-.44 1.763a4.5 4.5 0 0 1-1.967 1.967c-.539.274-1.117.386-1.763.44-.633.051-1.416.05-2.38.05h-1.8c-.964 0-1.747.001-2.38-.05-.646-.053-1.224-.166-1.763-.44a4.5 4.5 0 0 1-1.967-1.967c-.274-.539-.386-1.117-.44-1.763a17 17 0 0 1-.044-1.066L7 15.4v-1.8c0-.964-.001-1.747.05-2.38.054-.646.166-1.224.44-1.763A4.5 4.5 0 0 1 9.457 7.49c.539-.274 1.117-.386 1.763-.44C11.853 7 12.636 7 13.6 7zm-.9 3.5a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1"
        />
        <path
          stroke="currentColor"
          strokeWidth={2}
          d="M16 8c0-1.396 0-2.095-.196-2.656a3.5 3.5 0 0 0-2.148-2.148C13.095 3 12.396 3 11 3H8.6c-1.96 0-2.94 0-3.689.381a3.5 3.5 0 0 0-1.53 1.53C3 5.66 3 6.64 3 8.6V11c0 1.396 0 2.095.196 2.656a3.5 3.5 0 0 0 2.148 2.148C5.905 16 6.604 16 8 16"
        />
      </svg>
    ))
);
DuplicatePlusIconFill.displayName = "DuplicatePlusIconFill";
export { DuplicatePlusIconFill };
