import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BlocksIconLinetone = memo(
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
          d="M8.75 6A2.25 2.25 0 0 1 11 8.25V13h4.75A2.25 2.25 0 0 1 18 15.25v4.5A2.25 2.25 0 0 1 15.75 22H4.25A2.25 2.25 0 0 1 2 19.75V8.25A2.25 2.25 0 0 1 4.25 6zM4 19.75c0 .138.112.25.25.25H9v-5H4zm7 .25h4.75a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25H11zM4.25 8a.25.25 0 0 0-.25.25V13h5V8.25A.25.25 0 0 0 8.75 8z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.75 2A2.25 2.25 0 0 1 22 4.25v4.5A2.25 2.25 0 0 1 19.75 11h-4.5A2.25 2.25 0 0 1 13 8.75v-4.5A2.25 2.25 0 0 1 15.25 2zm-4.5 2a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BlocksIconLinetone.displayName = "BlocksIconLinetone";
export { BlocksIconLinetone };
