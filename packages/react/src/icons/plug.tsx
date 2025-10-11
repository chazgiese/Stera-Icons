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
          d="M5.107 10.773a2 2 0 0 1 2.777.05l5.293 5.293a2 2 0 0 1 .05 2.778l-.143.153-.018.019a5.75 5.75 0 0 1-7.566.494l-2.97 2.97a.75.75 0 0 1-1.06-1.06l2.969-2.97a5.75 5.75 0 0 1 .495-7.566l.02-.019zm1.715 1.11a.5.5 0 0 0-.694-.012l-.143.134a4.25 4.25 0 0 0 6.01 6.009l.134-.142a.5.5 0 0 0-.013-.695zM21.293 1.293a1 1 0 0 1 1.414 1.414L19.71 5.703a5.75 5.75 0 0 1-.644 7.363l-.019.018-.153.143a2 2 0 0 1-2.778-.05l-.616-.616-1.47 1.47a.75.75 0 1 1-1.06-1.061l1.47-1.47-1.94-1.94-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-.617-.616a2 2 0 0 1-.05-2.777l.142-.154.019-.02a5.75 5.75 0 0 1 7.362-.644zm-3.288 4.702a4.25 4.25 0 0 0-6-.01l-.134.143a.5.5 0 0 0 .013.694l5.293 5.294c.19.19.498.197.695.013l.143-.135a4.25 4.25 0 0 0-.01-5.999"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlugIcon.displayName = "PlugIcon";
export { PlugIcon };
