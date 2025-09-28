import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendVertical = memo(
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
          d="M10.212 2.9c.737-1.473 2.84-1.473 3.578 0l8.1 16.2c.875 1.751-1.029 3.587-2.748 2.65l-7.141-3.896-7.142 3.896c-1.72.938-3.623-.899-2.747-2.65zM3.453 19.77a.5.5 0 0 0 .686.663l7.11-3.878V4.177zm9.297-3.215 7.11 3.878a.5.5 0 0 0 .686-.662L12.751 4.177z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendVertical.displayName = "SendVertical";
export { SendVertical };
