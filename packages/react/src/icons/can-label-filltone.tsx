import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CanLabelIconFilltone = memo(
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
          <path d="M17.156 20.992A2 2 0 0 1 15.42 22H8.58a2 2 0 0 1-1.736-1.008L5.706 19h12.588z" />
          <path
            fillRule="evenodd"
            d="M19 16.703q0 .15-.013.297H5.013A4 4 0 0 1 5 16.703V8h14zM12 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
            clipRule="evenodd"
          />
          <path d="M5.116 6.344c.089-.36.226-.707.411-1.032l.762-1.335A1 1 0 0 1 6.5 2h11a1 1 0 0 1 .21 1.977l.763 1.336a4 4 0 0 1 .31.687H5.217a4 4 0 0 0-.1.344" />
        </g>
        <path
          fill="currentColor"
          d="M18.99 17a4 4 0 0 1-.517 1.688l-.18.312H5.707l-.179-.312A4 4 0 0 1 5.011 17zM12 10.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.783 6c.143.416.217.854.217 1.297V8H5v-.703c0-.443.074-.881.217-1.297z"
        />
      </svg>
    ))
);
CanLabelIconFilltone.displayName = "CanLabelIconFilltone";
export { CanLabelIconFilltone };
