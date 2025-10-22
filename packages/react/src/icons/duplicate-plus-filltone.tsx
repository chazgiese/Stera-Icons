import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DuplicatePlusIconFilltone = memo(
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
          d="M11 2c.881 0 1.468-.005 1.976.096a5 5 0 0 1 3.928 3.928C17.005 6.532 17 7.12 17 8h-2c0-.977-.005-1.32-.058-1.585a3 3 0 0 0-2.357-2.357C12.319 4.005 11.977 4 11 4H9.4c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277a3 3 0 0 0-1.31 1.31c-.135.264-.228.612-.277 1.217C4 7.471 4 8.264 4 9.4V11c0 .977.005 1.32.058 1.585a3 3 0 0 0 2.357 2.357C6.68 14.995 7.023 15 8 15v2c-.881 0-1.468.005-1.976-.096a5 5 0 0 1-3.928-3.928C1.995 12.468 2 11.88 2 11V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 2.544c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.6 7c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71v.199c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H14.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C6.999 16.59 7 15.703 7 14.599V14.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 9.73 7.544c.593-.302 1.233-.428 1.961-.487.718-.059 1.606-.058 2.71-.058zm-.1 3.5a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DuplicatePlusIconFilltone.displayName = "DuplicatePlusIconFilltone";
export { DuplicatePlusIconFilltone };
