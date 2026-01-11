import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilLineIconBold = memo(
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
          d="M16.41 1.677a2.25 2.25 0 0 1 3.18 0l2.733 2.733a2.25 2.25 0 0 1 0 3.181l-12.41 12.41H21a1 1 0 1 1 0 2H3a1 1 0 0 1-.429-.098l-.017-.009a1 1 0 0 1-.396-.356l-.012-.019-.039-.07-.012-.025a1 1 0 0 1-.09-.524l.5-5 .032-.17c.046-.164.134-.315.256-.437zM4.458 16.454l-.343 3.428 3.429-.343 9.54-9.54-3.086-3.085zM18.177 3.09a.25.25 0 0 0-.354 0L15.413 5.5l3.086 3.085 2.41-2.408a.25.25 0 0 0 0-.353z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilLineIconBold.displayName = "PencilLineIconBold";
export { PencilLineIconBold };
