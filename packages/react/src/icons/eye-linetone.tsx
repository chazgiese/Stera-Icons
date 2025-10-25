import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeIconLinetone = memo(
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
          d="M12 4c4.924 0 9.107 3.169 10.926 7.622a1 1 0 0 1 0 .756C21.106 16.83 16.924 20 12 20s-9.107-3.169-10.926-7.622a1 1 0 0 1 0-.756C2.894 7.17 7.076 4 12 4m0 2c-3.887 0-7.291 2.42-8.912 6 1.62 3.58 5.025 6 8.912 6s7.29-2.42 8.911-6C19.291 8.42 15.887 6 12 6"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
EyeIconLinetone.displayName = "EyeIconLinetone";
export { EyeIconLinetone };
