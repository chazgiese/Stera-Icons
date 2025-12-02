import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BirdhouseIconFilltone = memo(
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
          d="M11.67 4.633a.5.5 0 0 1 .664 0l7.146 6.352L17.953 19H6.046L4.52 10.988zM12 10a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M19 19a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zM12 10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
        />
        <path
          fill="currentColor"
          d="M10.34 3.139a2.5 2.5 0 0 1 3.323 0l8.002 7.114a1 1 0 0 1-1.328 1.494l-8.003-7.114a.5.5 0 0 0-.664 0l-8.005 7.114a1 1 0 0 1-1.328-1.494z"
        />
      </svg>
    ))
);
BirdhouseIconFilltone.displayName = "BirdhouseIconFilltone";
export { BirdhouseIconFilltone };
