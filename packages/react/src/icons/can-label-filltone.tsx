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
        <path
          fill="currentColor"
          d="M17.5 2a1 1 0 0 1 .21 1.977l.763 1.336A4 4 0 0 1 19 7.297v9.406a4 4 0 0 1-.527 1.985l-1.317 2.304A2 2 0 0 1 15.42 22H8.58a2 2 0 0 1-1.736-1.008l-1.317-2.305A4 4 0 0 1 5 16.704V7.297a4 4 0 0 1 .527-1.984l.762-1.336A1 1 0 0 1 6.5 2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.99 17a4 4 0 0 1-.517 1.688l-.18.312H5.707l-.179-.312A4 4 0 0 1 5.011 17zM12 10.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.783 6c.143.416.217.854.217 1.297V8H5v-.703c0-.443.074-.881.217-1.297z"
        />
      </svg>
    ))
);
CanLabelIconFilltone.displayName = "CanLabelIconFilltone";
export { CanLabelIconFilltone };
