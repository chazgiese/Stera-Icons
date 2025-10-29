import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulerIconFilltone = memo(
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
          d="M5.91 2.177a2.25 2.25 0 0 1 3.181 0L21.824 14.91a2.25 2.25 0 0 1 0 3.182l-3.733 3.733a2.25 2.25 0 0 1-3.183 0l-2.659-2.66 2.958-2.957a1 1 0 0 0-1.414-1.414l-2.958 2.957-1.586-1.585 2.958-2.958a1 1 0 0 0-1.414-1.414L7.835 14.75 6.25 13.164l2.958-2.957a1 1 0 0 0-1.414-1.414L4.835 11.75 2.177 9.091a2.25 2.25 0 0 1 0-3.181z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.207 14.793a1 1 0 0 0-1.414 0l-2.958 2.958 1.414 1.414 2.958-2.958a1 1 0 0 0 0-1.414M12.207 11.793a1 1 0 0 0-1.414 0l-2.958 2.958 1.414 1.414 2.958-2.958a1 1 0 0 0 0-1.414M9.207 8.793a1 1 0 0 0-1.414 0l-2.958 2.958 1.414 1.414 2.958-2.958a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RulerIconFilltone.displayName = "RulerIconFilltone";
export { RulerIconFilltone };
