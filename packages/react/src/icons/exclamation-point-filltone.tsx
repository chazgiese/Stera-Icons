import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExclamationPointIconFilltone = memo(
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
          d="M12 17.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 2c.486 0 .95.185 1.278.513s.494.773.472 1.237l-.025.537-.45 9.676-.025.537a1.26 1.26 0 0 1-.394.844c-.234.224-.54.35-.856.35-.317 0-.622-.127-.857-.35a1.26 1.26 0 0 1-.393-.844l-.024-.537-.45-9.676-.026-.537c-.022-.464.143-.91.472-1.237A1.8 1.8 0 0 1 12 2"
        />
      </svg>
    ))
);
ExclamationPointIconFilltone.displayName = "ExclamationPointIconFilltone";
export { ExclamationPointIconFilltone };
