import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextBoldIconFilltone = memo(
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
          d="M6 1.5h1.5v21H6A1.5 1.5 0 0 1 4.5 21V3A1.5 1.5 0 0 1 6 1.5"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12.5 1.5a6 6 0 0 1 4.747 9.666A6 6 0 0 1 14.5 22.5h-7v-3h7a3 3 0 1 0 0-6h-7v-3h5a3 3 0 1 0 0-6h-5v-3z"
        />
      </svg>
    ))
);
TextBoldIconFilltone.displayName = "TextBoldIconFilltone";
export { TextBoldIconFilltone };
