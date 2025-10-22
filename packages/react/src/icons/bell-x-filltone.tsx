import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BellXIconFilltone = memo(
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
          d="M12 1.25A8.75 8.75 0 0 1 20.75 10v1.892c0 .589.16 1.167.463 1.673l1.068 1.778c.899 1.5-.182 3.407-1.93 3.407h-3.407a5 5 0 0 1-9.888 0H3.65c-1.749 0-2.83-1.908-1.93-3.407l1.067-1.778a3.25 3.25 0 0 0 .463-1.673V10A8.75 8.75 0 0 1 12 1.25m-2.902 17.5A3 3 0 0 0 12 21a3 3 0 0 0 2.902-2.25z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M13.793 7.293a1 1 0 1 1 1.414 1.414L13.414 10.5l1.793 1.793a1 1 0 0 1-1.414 1.414L12 11.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 1 1 1.414-1.414L12 9.086z"
        />
      </svg>
    ))
);
BellXIconFilltone.displayName = "BellXIconFilltone";
export { BellXIconFilltone };
