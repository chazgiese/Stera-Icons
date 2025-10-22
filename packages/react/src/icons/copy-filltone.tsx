import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CopyIconFilltone = memo(
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
          d="M14.6 2c1.103 0 1.991 0 2.708.058.73.06 1.37.185 1.962.487a5 5 0 0 1 2.185 2.186c.302.592.428 1.232.487 1.96.059.718.058 1.606.058 2.71V11c0 .881.005 1.468-.096 1.976a5 5 0 0 1-3.928 3.928C17.468 17.005 16.88 17 16 17v-2c.977 0 1.32-.005 1.585-.058a3 3 0 0 0 2.357-2.357c.053-.265.058-.608.058-1.585V9.4c0-1.136 0-1.929-.05-2.545-.05-.606-.143-.954-.277-1.217a3 3 0 0 0-1.31-1.31c-.264-.135-.612-.228-1.218-.277C16.53 4 15.735 4 14.6 4H13c-.977 0-1.32.005-1.585.058a3 3 0 0 0-2.357 2.357C9.005 6.68 9 7.023 9 8H7c0-.881-.005-1.468.096-1.976a5 5 0 0 1 3.928-3.928C11.532 1.995 12.12 2 13 2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M9.6 7c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71v.199c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 16.59 2 15.703 2 14.599V14.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 7.544c.593-.302 1.233-.428 1.961-.487C7.41 6.999 8.297 7 9.401 7z"
        />
      </svg>
    ))
);
CopyIconFilltone.displayName = "CopyIconFilltone";
export { CopyIconFilltone };
