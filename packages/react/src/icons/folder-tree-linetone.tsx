import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderTreeIconLinetone = memo(
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
          d="M3 2a1 1 0 0 1 1 1v1.5A1.5 1.5 0 0 0 5.5 6H9a1 1 0 0 1 0 2H5.5c-.537 0-1.045-.12-1.5-.337V15.5l.008.153A1.5 1.5 0 0 0 5.5 17H9a1 1 0 1 1 0 2H5.5a3.5 3.5 0 0 1-3.495-3.32L2 15.5V5q0-.09.016-.174A4 4 0 0 1 2 4.5V3a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.831 13a2.25 2.25 0 0 1 1.872 1.002l.332.498h2.715A2.25 2.25 0 0 1 22 16.75v3A2.25 2.25 0 0 1 19.75 22h-5.5A2.25 2.25 0 0 1 12 19.75v-4.5A2.25 2.25 0 0 1 14.25 13zm-.581 2a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25H16.5a1 1 0 0 1-.832-.445l-.629-.944a.25.25 0 0 0-.208-.111zM14.831 2a2.25 2.25 0 0 1 1.872 1.002l.332.498h2.715A2.25 2.25 0 0 1 22 5.75v3A2.25 2.25 0 0 1 19.75 11h-5.5A2.25 2.25 0 0 1 12 8.75v-4.5A2.25 2.25 0 0 1 14.25 2zm-.581 2a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25H16.5a1 1 0 0 1-.832-.445l-.629-.944A.25.25 0 0 0 14.831 4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderTreeIconLinetone.displayName = "FolderTreeIconLinetone";
export { FolderTreeIconLinetone };
