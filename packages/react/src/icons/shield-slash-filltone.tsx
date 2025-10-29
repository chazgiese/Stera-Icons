import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldSlashIconFilltone = memo(
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
          <path d="M17.758 19.172a13 13 0 0 1-3.944 3.039l-1.367.684a1 1 0 0 1-.894 0l-1.367-.684A13 13 0 0 1 3 10.584V5c0-.167.043-.326.118-.468zM11.734 1.036c.203-.056.42-.047.618.027l8 3A1 1 0 0 1 21 5v5.584c0 2.518-.73 4.925-2.03 6.972L4.979 3.564l6.67-2.5z" />
        </g>
        <path
          fill="currentColor"
          d="M1.793 1.793a1 1 0 0 1 1.414 0l18.5 18.5a1 1 0 0 1-1.414 1.414l-18.5-18.5a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ShieldSlashIconFilltone.displayName = "ShieldSlashIconFilltone";
export { ShieldSlashIconFilltone };
