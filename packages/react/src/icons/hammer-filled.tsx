import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HammerIconFilled = memo(
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
          d="M14.5 2a1 1 0 0 1 .707.293l.99.99 1.356-.678.106-.045A1 1 0 0 1 18 2.5h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-.447-.105l-1.356-.678-.99.99a1 1 0 0 1-.172.136l.36 8.618a3.398 3.398 0 1 1-6.79 0l.394-9.467c-.001-.118-.047-.24-.235-.375-.214-.151-.578-.283-1.064-.307-.972-.05-2.145.346-2.919 1.313a1.001 1.001 0 0 1-1.761-.821C4.102 3.392 7.469 2 9 2zm-3.896 16.544a1.398 1.398 0 1 0 2.793 0L13.04 10h-2.082z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HammerIconFilled.displayName = "HammerIconFilled";
export { HammerIconFilled };
