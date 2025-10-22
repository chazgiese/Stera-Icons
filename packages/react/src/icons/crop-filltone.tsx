import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CropIconFilltone = memo(
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
          d="M6 .5A1.5 1.5 0 0 1 7.5 2v12.8c0 .584.001.933.022 1.191.02.241.05.268.033.236.048.094.124.17.218.218-.032-.016-.005.013.236.032.258.022.607.023 1.191.023H22a1.5 1.5 0 0 1 0 3H9.2c-.535 0-1.027.001-1.435-.032-.427-.035-.893-.115-1.354-.35a3.5 3.5 0 0 1-1.53-1.53c-.234-.46-.314-.926-.349-1.353-.033-.408-.032-.9-.032-1.435V2A1.5 1.5 0 0 1 6 .5"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M14.8 4.5c.535 0 1.027-.001 1.435.032.427.035.893.115 1.354.35a3.5 3.5 0 0 1 1.53 1.53c.234.46.314.926.349 1.353.033.408.032.9.032 1.435V22a1.5 1.5 0 0 1-3 0V9.2c0-.584-.001-.933-.023-1.191-.02-.24-.048-.268-.032-.236a.5.5 0 0 0-.218-.218c.032.016.005-.013-.236-.033-.258-.02-.607-.022-1.191-.022H2a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
CropIconFilltone.displayName = "CropIconFilltone";
export { CropIconFilltone };
