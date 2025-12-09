import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldHalfIconFilltone = memo(
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
          <path d="M11 1.307v21.311l-.813-.407A13 13 0 0 1 3 10.584V5a1 1 0 0 1 .648-.937zM20.352 4.063A1 1 0 0 1 21 5v5.584a13 13 0 0 1-7.187 11.627l-.813.407V1.307z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 22.618V1.307l.648-.244.086-.027c.203-.056.42-.047.618.027l.648.244v21.31l-.553.277a1 1 0 0 1-.894 0z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldHalfIconFilltone.displayName = "ShieldHalfIconFilltone";
export { ShieldHalfIconFilltone };
