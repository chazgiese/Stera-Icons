import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GavelIconLinetone = memo(
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
          d="M10.263 5.638c.087.328.258.64.516.897l.708.708-4.243 4.242 2.828 2.829 4.243-4.243.707.707c.257.258.568.43.897.517l-.544.544 5.304 5.304a2.5 2.5 0 0 1-3.535 3.535l-5.304-5.304-.546.545a2 2 0 0 0-.516-.899l-4.243-4.242a2 2 0 0 0-.897-.515zm2.99 8.322 5.305 5.304a.5.5 0 0 0 .707-.707l-5.304-5.304z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.707 10.779a2 2 0 0 1 2.828 0l4.243 4.242a2 2 0 0 1 0 2.828l-.707.708a2 2 0 0 1-2.829 0L3 14.314a2 2 0 0 1 0-2.828zm.707 2.12 4.242 4.243.708-.707-4.243-4.242zM11.486 3a2 2 0 0 1 2.828 0l4.244 4.242c.78.782.78 2.049 0 2.83l-.708.707a2 2 0 0 1-2.829 0L10.78 6.535a2 2 0 0 1 0-2.828zm.707 2.121 4.242 4.244.708-.708L12.9 4.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GavelIconLinetone.displayName = "GavelIconLinetone";
export { GavelIconLinetone };
