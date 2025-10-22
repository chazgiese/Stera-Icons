import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SidebarRightIconFilltone = memo(
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
          d="M8.4 3c-1.103 0-1.991-.001-2.709.058-.728.06-1.368.185-1.96.487A5 5 0 0 0 1.544 5.73c-.302.593-.428 1.233-.487 1.961C.999 8.41 1 9.297 1 10.401V13.6c0 1.103-.001 1.991.058 2.709.06.728.185 1.368.487 1.96a5 5 0 0 0 2.185 2.186c.593.302 1.233.428 1.961.487.718.059 1.606.058 2.71.058H14V3z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M14 21h1.6c1.103 0 1.991.001 2.709-.058.728-.06 1.368-.185 1.96-.487a5 5 0 0 0 2.186-2.185c.302-.593.428-1.233.487-1.961.059-.718.058-1.606.058-2.71V10.4c0-1.103.001-1.991-.058-2.709-.06-.728-.185-1.368-.487-1.96a5 5 0 0 0-2.185-2.186c-.593-.302-1.233-.428-1.961-.487C17.59 2.999 16.703 3 15.599 3H14z"
        />
      </svg>
    ))
);
SidebarRightIconFilltone.displayName = "SidebarRightIconFilltone";
export { SidebarRightIconFilltone };
