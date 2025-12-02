import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LabelAltIconFilltone = memo(
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
          d="m20.746 5 .07.01a.25.25 0 0 1 .142.373l-3.143 5.027a3 3 0 0 0 0 3.18l3.143 5.027a.25.25 0 0 1-.212.383H7.109a1 1 0 0 1-.848-.47l-3.75-6a1 1 0 0 1 0-1.06l3.75-6c.16-.256.426-.424.72-.462L7.11 5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.908 3.006c1.669.115 2.651 1.985 1.744 3.436l-3.141 5.028a1 1 0 0 0 0 1.06l3.141 5.028c.937 1.498-.14 3.442-1.907 3.442H7.108a3 3 0 0 1-2.544-1.41l-3.75-6a3 3 0 0 1 0-3.18l3.75-6A3 3 0 0 1 7.108 3h13.637zM6.98 5.008a1 1 0 0 0-.72.462l-3.75 6a1 1 0 0 0 0 1.06l3.75 6a1 1 0 0 0 .848.47h13.637a.25.25 0 0 0 .212-.383l-3.143-5.027a3 3 0 0 1 0-3.18l3.143-5.027a.25.25 0 0 0-.143-.373L20.745 5H7.108z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LabelAltIconFilltone.displayName = "LabelAltIconFilltone";
export { LabelAltIconFilltone };
