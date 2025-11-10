import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PushPinIconFilltone = memo(
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
          d="M16.967 2.26a1.987 1.987 0 0 1 .685 3.753l-.626.312a.5.5 0 0 0-.276.447v3.56a.5.5 0 0 0 .223.415l1.886 1.258a2 2 0 0 1 .891 1.664v1.081a2 2 0 0 1-2 2H6.25a2 2 0 0 1-2-2v-1.081a2 2 0 0 1 .89-1.664l1.887-1.258a.5.5 0 0 0 .223-.416V6.772a.5.5 0 0 0-.276-.447l-.626-.312a1.986 1.986 0 0 1 .888-3.763h9.528z"
          opacity={0.4}
        />
        <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-5.25h2z" />
      </svg>
    ))
);
PushPinIconFilltone.displayName = "PushPinIconFilltone";
export { PushPinIconFilltone };
