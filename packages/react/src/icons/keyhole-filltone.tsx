import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyholeIconFilltone = memo(
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
          d="M12 4a4.5 4.5 0 0 1 2.788 8.032 1 1 0 0 0-.274 1.232l2.687 5.375a.25.25 0 0 1-.224.361H7.022a.25.25 0 0 1-.223-.361l2.687-5.375a1 1 0 0 0-.274-1.232A4.5 4.5 0 0 1 12 4"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a6.5 6.5 0 0 1 4.642 11.047l2.348 4.697C19.738 19.24 18.65 21 16.978 21H7.022c-1.672 0-2.76-1.76-2.012-3.256l2.348-4.697A6.5 6.5 0 0 1 12 2m0 2a4.5 4.5 0 0 0-2.788 8.032 1 1 0 0 1 .274 1.232L6.8 18.639a.25.25 0 0 0 .223.361h9.956a.25.25 0 0 0 .223-.361l-2.687-5.375a1 1 0 0 1 .274-1.232A4.5 4.5 0 0 0 12 4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
KeyholeIconFilltone.displayName = "KeyholeIconFilltone";
export { KeyholeIconFilltone };
