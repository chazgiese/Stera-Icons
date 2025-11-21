import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilRulerIconLinetone = memo(
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
          d="M7 1a1 1 0 0 1 .759.35l3 3.5A1 1 0 0 1 11 5.5v15.25A2.25 2.25 0 0 1 8.75 23h-3.5A2.25 2.25 0 0 1 3 20.75V5.5a1 1 0 0 1 .241-.65l3-3.5A1 1 0 0 1 7 1M5 5.87v14.88c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V5.87L7.001 3.535zM18.75 2A2.25 2.25 0 0 1 21 4.25v16.5A2.25 2.25 0 0 1 18.75 23h-3.5A2.25 2.25 0 0 1 13 20.75V4.25A2.25 2.25 0 0 1 15.25 2zm-3.5 2a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M9 19.5H5v-2h4zM9 8H5V6h4zM17 16.25a1 1 0 1 1 0 2h-2v-2zM17 11.5a1 1 0 1 1 0 2h-2v-2zM17 6.75a1 1 0 1 1 0 2h-2v-2z" />
        </g>
      </svg>
    ))
);
PencilRulerIconLinetone.displayName = "PencilRulerIconLinetone";
export { PencilRulerIconLinetone };
