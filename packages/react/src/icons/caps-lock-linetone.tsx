import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CapsLockIconLinetone = memo(
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
          d="M14.75 17A2.25 2.25 0 0 1 17 19.25v1.5A2.25 2.25 0 0 1 14.75 23h-5.5A2.25 2.25 0 0 1 7 20.75v-1.5A2.25 2.25 0 0 1 9.25 17zm-5.5 2a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.41 1.677a2.25 2.25 0 0 1 3.18 0l8.264 8.263c.944.945.275 2.56-1.06 2.56H17v1.25A2.25 2.25 0 0 1 14.75 16h-5.5A2.25 2.25 0 0 1 7 13.75V12.5H3.207c-1.336 0-2.005-1.615-1.06-2.56zm1.767 1.414a.25.25 0 0 0-.354 0l-7.409 7.41H8a1 1 0 0 1 1 1v2.25c0 .137.112.25.25.25h5.5a.25.25 0 0 0 .25-.25V11.5a1 1 0 0 1 1-1h3.586z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CapsLockIconLinetone.displayName = "CapsLockIconLinetone";
export { CapsLockIconLinetone };
