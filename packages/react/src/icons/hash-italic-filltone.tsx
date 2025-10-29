import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashItalicIconFilltone = memo(
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
          d="M19 13.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 7.5a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 1 1 0-3z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M8.464 21.325a1.5 1.5 0 0 1-2.928-.65l.928-4.175h3.072zM14.464 21.325a1.5 1.5 0 0 1-2.928-.65l.928-4.175h3.072zM10.203 13.5H7.131l.666-3h3.072zM16.203 13.5h-3.072l.666-3h3.072zM9.536 2.675a1.5 1.5 0 1 1 2.928.65L11.536 7.5H8.464zM15.536 2.675a1.5 1.5 0 1 1 2.928.65L17.536 7.5h-3.072z" />
        </g>
      </svg>
    ))
);
HashItalicIconFilltone.displayName = "HashItalicIconFilltone";
export { HashItalicIconFilltone };
