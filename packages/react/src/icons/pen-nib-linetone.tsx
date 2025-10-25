import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenNibIconLinetone = memo(
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
          d="m14 1 .117.007a1 1 0 0 1 .682.393c2.273 3.031 4.669 6.894 5.687 10.315.508 1.705.712 3.425.269 4.914-.405 1.358-1.317 2.415-2.755 3.057v1.064A2.25 2.25 0 0 1 15.75 23H8.249a2.25 2.25 0 0 1-2.25-2.25v-1.064c-1.439-.642-2.35-1.7-2.755-3.057-.443-1.489-.24-3.21.268-4.914C4.531 8.295 6.926 4.43 9.2 1.4a1 1 0 0 1 .683-.393L9.999 1zm-3.497 2c-2.126 2.892-4.198 6.343-5.074 9.285-.46 1.545-.55 2.825-.268 3.774.26.872.867 1.58 2.143 1.989A1 1 0 0 1 8 19v1.75c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25V19a1 1 0 0 1 .695-.952c1.276-.41 1.884-1.117 2.144-1.99.282-.948.191-2.228-.269-3.773-.876-2.942-2.948-6.393-5.073-9.285z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M13 10.709a2.5 2.5 0 1 1-2 0V1h2z" />
      </svg>
    ))
);
PenNibIconLinetone.displayName = "PenNibIconLinetone";
export { PenNibIconLinetone };
