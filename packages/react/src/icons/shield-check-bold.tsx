import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldCheckIconBold = memo(
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
          d="M15.168 8.793a1 1 0 1 1 1.414 1.414l-4.848 4.848c-.1.1-.22.22-.332.315-.12.101-.309.24-.57.314a1.5 1.5 0 0 1-1.006-.072 1.5 1.5 0 0 1-.52-.39c-.098-.11-.2-.247-.285-.36L7.325 12.6a1 1 0 1 1 1.6-1.2l1.557 2.077z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.734 1.036c.203-.056.42-.047.618.027l8 3A1 1 0 0 1 21 5v5.584a13 13 0 0 1-7.187 11.627l-1.366.684a1 1 0 0 1-.894 0l-1.367-.684A13 13 0 0 1 3 10.584V5a1 1 0 0 1 .648-.937l8-3zM5 5.693v4.89a11 11 0 0 0 6.081 9.839l.919.459.919-.46A11 11 0 0 0 19 10.585v-4.89l-7-2.626z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldCheckIconBold.displayName = "ShieldCheckIconBold";
export { ShieldCheckIconBold };
