import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenIconLinetone = memo(
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
          <path d="m12.586 5.5 1.413 1.413-9.54 9.54-.343 3.429 3.429-.343 9.54-9.54 1.415 1.415-9.793 9.792a1 1 0 0 1-.607.288l-5 .5A1 1 0 0 1 2.005 20.9l.5-5 .032-.168c.046-.165.134-.317.256-.439zM18.25 1.621c1.053 0 2.155.37 2.957 1.172S22.38 4.697 22.38 5.75s-.37 2.155-1.172 2.957L19.914 10 18.5 8.585l1.294-1.292c.37-.37.586-.932.586-1.543s-.217-1.174-.586-1.543c-.37-.37-.932-.586-1.543-.586s-1.174.217-1.543.586l-1.294 1.292L14 4.086l1.293-1.293c.802-.802 1.904-1.172 2.957-1.172" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14 4.086 12.586 5.5l5.914 5.914L19.914 10z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PenIconLinetone.displayName = "PenIconLinetone";
export { PenIconLinetone };
