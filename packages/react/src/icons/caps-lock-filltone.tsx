import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CapsLockIconFilltone = memo(
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
          d="M15 17a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M10.409 1.677a2.25 2.25 0 0 1 3.182 0l8.262 8.263c.945.945.276 2.56-1.06 2.56H17V14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1.5H3.207c-1.336 0-2.005-1.615-1.06-2.56z"
        />
      </svg>
    ))
);
CapsLockIconFilltone.displayName = "CapsLockIconFilltone";
export { CapsLockIconFilltone };
