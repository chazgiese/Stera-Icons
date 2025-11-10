import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlugIcon = memo(
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
          d="M5.107 10.774a2 2 0 0 1 2.777.05l5.293 5.293a2 2 0 0 1 .05 2.778l-.143.153-.018.019a5.75 5.75 0 0 1-7.567.494L2.53 22.53a.75.75 0 0 1-1.06-1.061l2.969-2.97a5.75 5.75 0 0 1 .514-7.584zm1.715 1.11a.5.5 0 0 0-.694-.013l-.143.134a4.251 4.251 0 0 0 6.01 6.01l.134-.143a.5.5 0 0 0-.013-.694zM21.293 1.293a1 1 0 0 1 1.414 1.414L19.71 5.703a5.75 5.75 0 0 1-.644 7.364l-.019.018-.153.143a2 2 0 0 1-2.778-.05l-.617-.617-1.469 1.47a.75.75 0 1 1-1.06-1.061l1.469-1.47-1.94-1.94-1.469 1.47a.75.75 0 1 1-1.06-1.06l1.469-1.47-.616-.616a2 2 0 0 1-.05-2.777l.142-.154.019-.018a5.75 5.75 0 0 1 7.361-.645zm-3.288 4.702a4.25 4.25 0 0 0-6-.01l-.134.144a.5.5 0 0 0 .013.694l4.137 4.138.01.009.007.009 1.139 1.138c.19.19.498.196.695.013l.143-.135a4.25 4.25 0 0 0-.01-6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlugIcon.displayName = "PlugIcon";
export { PlugIcon };
