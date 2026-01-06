import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlugIconDuotone = memo(
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
          <path
            fillRule="evenodd"
            d="M5.106 10.774a2 2 0 0 1 2.777.05l5.294 5.293a2 2 0 0 1 .05 2.777l-.143.153-.018.02a5.75 5.75 0 0 1-8.132-8.132l.019-.019zm1.717 1.11a.5.5 0 0 0-.695-.013l-.143.134a4.25 4.25 0 0 0 6.01 6.01l.133-.143a.5.5 0 0 0-.011-.694z"
            clipRule="evenodd"
          />
          <path d="M21.47 1.47a.75.75 0 0 1 1.06 1.06L19.56 5.5a6 6 0 0 0-.495-.565q-.271-.27-.566-.495z" />
        </g>
        <path
          fill="currentColor"
          d="M4.439 18.5q.225.295.495.566.271.27.565.494L2.53 22.53a.75.75 0 1 1-1.06-1.06z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.934 4.934a5.75 5.75 0 0 1 8.132 8.132l-.019.019-.153.142a2 2 0 0 1-2.778-.05l-.617-.617-1.469 1.47a.75.75 0 1 1-1.06-1.06l1.469-1.47-1.94-1.94-1.469 1.47a.75.75 0 1 1-1.06-1.06l1.469-1.47-.616-.615a2 2 0 0 1-.05-2.778l.142-.153zm7.071 1.062a4.25 4.25 0 0 0-6-.01l-.134.143a.5.5 0 0 0 .013.694l4.137 4.138.01.009.007.008 1.139 1.139c.19.19.498.196.695.013l.143-.135a4.25 4.25 0 0 0-.01-6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlugIconDuotone.displayName = "PlugIconDuotone";
export { PlugIconDuotone };
