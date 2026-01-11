import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ComponentIconFillDuotone = memo(
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
          <path d="M4.763 8.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.475l-2.586 2.585a1.75 1.75 0 0 1-2.474 0l-2.586-2.585a1.75 1.75 0 0 1 0-2.475zM16.763 8.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.475l-2.585 2.585a1.75 1.75 0 0 1-2.475 0l-2.586-2.585a1.75 1.75 0 0 1 0-2.475z" />
        </g>
        <path
          fill="currentColor"
          d="M10.763 14.177a1.75 1.75 0 0 1 2.475 0l2.585 2.586a1.75 1.75 0 0 1 0 2.474l-2.585 2.586a1.75 1.75 0 0 1-2.475 0l-2.586-2.585a1.75 1.75 0 0 1 0-2.475zM10.763 2.177a1.75 1.75 0 0 1 2.475 0l2.585 2.586a1.75 1.75 0 0 1 0 2.474l-2.585 2.586a1.75 1.75 0 0 1-2.475 0L8.177 7.237a1.75 1.75 0 0 1 0-2.474z"
        />
      </svg>
    ))
);
ComponentIconFillDuotone.displayName = "ComponentIconFillDuotone";
export { ComponentIconFillDuotone };
