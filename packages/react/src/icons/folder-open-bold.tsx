import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderOpenBold = memo(
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
          d="M7.93 3a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 12.07 6h7.077a3 3 0 0 1 2.992 2.77l.101 1.324a2.25 2.25 0 0 1 1.6 2.404l-.55 4.943A4 4 0 0 1 19.314 21H4.818a4 4 0 0 1-3.992-3.75L.135 6.188A3 3 0 0 1 3.129 3zm-3.811 9a.25.25 0 0 0-.249.223l-.506 4.556A2 2 0 0 0 5.351 19h13.963a2 2 0 0 0 1.989-1.78l.548-4.943a.25.25 0 0 0-.248-.277zm-.99-7a1 1 0 0 0-.998 1.063l.294 4.71A2.25 2.25 0 0 1 4.119 10h16.108l-.083-1.077A1 1 0 0 0 19.147 8H12.07a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 7.93 5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderOpenBold.displayName = "FolderOpenBold";
export { FolderOpenBold };
