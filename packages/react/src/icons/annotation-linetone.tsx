import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AnnotationIconLinetone = memo(
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
          d="M14.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H8a1 1 0 1 1 0-2h6.6c1.136 0 1.929 0 2.545-.05.606-.05.954-.143 1.217-.277a3 3 0 0 0 1.31-1.31c.135-.264.228-.612.277-1.218C20 16.53 20 15.736 20 14.6V9.4c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216a3 3 0 0 0-1.31-1.31c-.264-.135-.612-.228-1.218-.277C16.53 4 15.736 4 14.6 4H9.4c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277a3 3 0 0 0-1.31 1.31c-.135.264-.228.612-.277 1.217C4 7.471 4 8.264 4 9.4V16a1 1 0 1 1-2 0V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 2.544c.593-.302 1.233-.428 1.961-.487C7.41 1.999 8.297 2 9.401 2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3 18a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 12a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 8a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
AnnotationIconLinetone.displayName = "AnnotationIconLinetone";
export { AnnotationIconLinetone };
