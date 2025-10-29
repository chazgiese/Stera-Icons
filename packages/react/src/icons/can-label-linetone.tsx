import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CanLabelIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M18.677 18c-.15.478-.348.942-.599 1.38l-.634 1.108A3 3 0 0 1 14.84 22H9.16a3 3 0 0 1-2.604-1.512l-.634-1.108A7 7 0 0 1 5.323 18h2.139q.09.197.197.388l.633 1.108A1 1 0 0 0 9.16 20h5.68a1 1 0 0 0 .868-.504l.633-1.108a5 5 0 0 0 .197-.388zM7 8.094v7.812l.003.094h-2q-.001-.046-.003-.094V8.094q.002-.048.003-.094h2q-.001.046-.003.094M19 8.094v7.812l-.003.094h-2q.001-.046.003-.094V8.094q0-.048-.003-.094h2q.001.046.003.094M17.5 2a1 1 0 0 1 .21 1.977l.368.643c.25.439.449.902.599 1.38h-2.139a5 5 0 0 0-.197-.388L15.42 4H8.58l-.92 1.612A5 5 0 0 0 7.461 6H5.323a7 7 0 0 1 .599-1.38l.367-.643A1 1 0 0 1 6.5 2z" />
        </g>
        <path
          fill="currentColor"
          d="M18.999 16a7 7 0 0 1-.32 2H5.32a7 7 0 0 1-.319-2zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.68 6c.202.645.31 1.319.319 2H5.001c.01-.681.117-1.355.32-2z"
        />
      </svg>
    ))
);
CanLabelIconLinetone.displayName = "CanLabelIconLinetone";
export { CanLabelIconLinetone };
