import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderOpenIconFilltone = memo(
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
          d="M7.93 3a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 12.07 6h7.077a3 3 0 0 1 2.992 2.77l.065.85a4 4 0 0 1 .007.47 2 2 0 0 0-.472-.086L21.612 10H5.721a2 2 0 0 0-1.898 1.367L1.93 17.052c-.62 1.86.68 3.776 2.588 3.935A4 4 0 0 1 .826 17.25L.135 6.188A3 3 0 0 1 3.129 3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21.74 10.004a2 2 0 0 1 1.77 2.629l-1.877 5.632A4 4 0 0 1 17.838 21H4.775a3 3 0 0 1-2.846-3.948l1.894-5.685A2 2 0 0 1 5.721 10h15.891z"
        />
      </svg>
    ))
);
FolderOpenIconFilltone.displayName = "FolderOpenIconFilltone";
export { FolderOpenIconFilltone };
