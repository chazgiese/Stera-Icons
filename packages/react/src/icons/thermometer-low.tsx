import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThermometerLowIcon = memo(
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
          d="M12 10.75c.69 0 1.25.56 1.25 1.25v1.113c0 .521.355.998.827 1.39a3.25 3.25 0 1 1-4.154 0c.472-.392.827-.869.827-1.39V12c0-.69.56-1.25 1.25-1.25"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25A3.75 3.75 0 0 1 15.75 5v7.5c0 .067.034.168.142.267a5.75 5.75 0 1 1-7.783 0c.107-.1.141-.2.141-.267V5A3.75 3.75 0 0 1 12 1.25m0 1.5A2.25 2.25 0 0 0 9.75 5v7.5c0 .562-.27 1.044-.626 1.371a4.25 4.25 0 1 0 5.752 0c-.355-.327-.626-.809-.626-1.371V5A2.25 2.25 0 0 0 12 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ThermometerLowIcon.displayName = "ThermometerLowIcon";
export { ThermometerLowIcon };
