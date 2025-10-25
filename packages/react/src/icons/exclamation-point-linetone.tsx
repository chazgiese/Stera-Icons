import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExclamationPointIconLinetone = memo(
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
          d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 2c.417 0 .814.158 1.095.44.282.28.424.662.406 1.06l-.026.55-.449 9.9-.025.55a1 1 0 0 1-.315.676 1 1 0 0 1-.685.28 1 1 0 0 1-.686-.28 1 1 0 0 1-.314-.676l-.026-.55-.449-9.9-.025-.55c-.019-.398.123-.78.405-1.06.28-.282.678-.44 1.095-.44"
        />
      </svg>
    ))
);
ExclamationPointIconLinetone.displayName = "ExclamationPointIconLinetone";
export { ExclamationPointIconLinetone };
