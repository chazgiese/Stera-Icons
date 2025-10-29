import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrashIconFilltone = memo(
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
          d="M20.373 16.061c-.065 1.04-.116 1.88-.213 2.556-.098.689-.253 1.291-.566 1.845a5 5 0 0 1-2.165 2.035c-.572.278-1.183.394-1.877.45C14.87 23 14.03 23 12.987 23h-1.974c-1.043 0-1.883 0-2.565-.054-.693-.055-1.305-.17-1.877-.449a5 5 0 0 1-2.165-2.035c-.313-.553-.468-1.156-.566-1.845-.097-.677-.148-1.515-.213-2.556L3.061 7H20.94zM9.25 10.002a1 1 0 0 0-.936 1.06l.375 6a1 1 0 0 0 1.996-.125l-.375-6a1 1 0 0 0-1.06-.935m5.5 0a1 1 0 0 0-1.06.935l-.375 6a1 1 0 0 0 1.995.125l.375-6a1 1 0 0 0-.935-1.06"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.25 10.002a1 1 0 0 1 1.06.935l.375 6a1 1 0 0 1-1.996.125l-.375-6a1 1 0 0 1 .936-1.06M14.75 10.002a1 1 0 0 1 .935 1.06l-.375 6a1 1 0 0 1-1.995-.125l.375-6a1 1 0 0 1 1.06-.935"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.439 1a3 3 0 0 1 2.91 2.272L16.78 5H22a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2h5.22l.431-1.728A3 3 0 0 1 10.561 1zm-2.877 2a1 1 0 0 0-.97.758L9.28 5h5.44l-.312-1.242a1 1 0 0 0-.97-.758z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TrashIconFilltone.displayName = "TrashIconFilltone";
export { TrashIconFilltone };
