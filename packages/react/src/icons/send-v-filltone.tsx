import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendVIconFilltone = memo(
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
          d="M9.988 2.789c.829-1.659 3.196-1.659 4.025 0l8.1 16.199c.984 1.97-1.157 4.035-3.09 2.981l-7.024-3.83-7.021 3.83c-1.934 1.055-4.074-1.01-3.09-2.981z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 9a1 1 0 0 1 1 1v8.686l-1.001-.545-.999.545V10a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
SendVIconFilltone.displayName = "SendVIconFilltone";
export { SendVIconFilltone };
