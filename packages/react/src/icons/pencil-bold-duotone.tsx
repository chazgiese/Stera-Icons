import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilIconBoldDuotone = memo(
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
          d="M16.41 1.677a2.25 2.25 0 0 1 3.18 0l2.733 2.732a2.25 2.25 0 0 1 0 3.182L18.5 11.414 12.586 5.5zm1.767 1.414a.25.25 0 0 0-.354 0l-2.409 2.41L18.5 8.585l2.41-2.409a.25.25 0 0 0 0-.353z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="m12.586 5.5 1.413 1.413-9.54 9.54-.343 3.429 3.429-.343 9.54-9.54 1.415 1.415-9.793 9.792a1 1 0 0 1-.607.288l-5 .5A1 1 0 0 1 2.005 20.9l.5-5 .032-.168c.046-.165.134-.317.256-.439z"
        />
      </svg>
    ))
);
PencilIconBoldDuotone.displayName = "PencilIconBoldDuotone";
export { PencilIconBoldDuotone };
