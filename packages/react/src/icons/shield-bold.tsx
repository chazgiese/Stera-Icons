import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldBold = memo(
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
          d="M11.734 1.036c.203-.056.42-.047.618.027l8 3A1 1 0 0 1 21 5v5.584a13 13 0 0 1-7.187 11.627l-1.366.684a1 1 0 0 1-.894 0l-1.367-.684A13 13 0 0 1 3 10.584V5a1 1 0 0 1 .648-.937l8-3zM5 5.693v4.89a11 11 0 0 0 6.081 9.839l.919.459.919-.46A11 11 0 0 0 19 10.585v-4.89l-7-2.626z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldBold.displayName = "ShieldBold";
export { ShieldBold };
