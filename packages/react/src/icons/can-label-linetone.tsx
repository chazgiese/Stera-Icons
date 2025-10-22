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
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 2a1 1 0 0 1 .21 1.977l.368.643A7 7 0 0 1 19 8.094v7.812a7 7 0 0 1-.922 3.474l-.634 1.108A3 3 0 0 1 14.84 22H9.16a3 3 0 0 1-2.604-1.512l-.634-1.108A7 7 0 0 1 5 15.906V8.094c0-1.218.318-2.416.922-3.474l.367-.643A1 1 0 0 1 6.5 2zM8.58 4l-.92 1.612A5 5 0 0 0 7 8.094v7.812c0 .87.227 1.726.66 2.482l.632 1.108A1 1 0 0 0 9.16 20h5.68a1 1 0 0 0 .868-.504l.633-1.108c.431-.756.659-1.612.659-2.482V8.094c0-.87-.227-1.726-.66-2.482L15.42 4z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M18.999 16a7 7 0 0 1-.32 2H5.32a7 7 0 0 1-.319-2zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.68 6c.202.645.31 1.319.319 2H5.001c.01-.681.117-1.355.32-2z"
        />
      </svg>
    ))
);
CanLabelIconLinetone.displayName = "CanLabelIconLinetone";
export { CanLabelIconLinetone };
