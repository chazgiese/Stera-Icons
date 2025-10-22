import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderOpenIconBold = memo(
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
          d="M7.93 3a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 12.07 6h7.077a3 3 0 0 1 2.992 2.77l.112 1.459a2.25 2.25 0 0 1 1.15 2.733l-1.768 5.303A4 4 0 0 1 17.838 21H4.774q-.13-.001-.257-.013a4 4 0 0 1-3.69-3.737L.134 6.188A3 3 0 0 1 3.129 3zm-2.107 9.013a.25.25 0 0 0-.159.158l-1.838 5.513A1 1 0 0 0 4.818 19h13.02a2 2 0 0 0 1.897-1.367l1.768-5.304a.25.25 0 0 0-.176-.321L21.265 12H5.901zM3.13 5a1 1 0 0 0-.998 1.063l.546 8.743 1.09-3.268A2.25 2.25 0 0 1 5.9 10h14.327l-.084-1.077A1 1 0 0 0 19.147 8H12.07a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 7.93 5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.93 3a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 12.07 6h7.077a3 3 0 0 1 2.992 2.77l.112 1.459a2.25 2.25 0 0 1 1.15 2.733l-1.768 5.303A4 4 0 0 1 17.838 21H4.774q-.13-.001-.258-.013a4 4 0 0 1-3.69-3.737L.135 6.188A3 3 0 0 1 3.129 3zm-2.107 9.013a.25.25 0 0 0-.16.158l-1.837 5.513A1 1 0 0 0 4.818 19h13.02a2 2 0 0 0 1.897-1.367l1.768-5.304a.25.25 0 0 0-.176-.321L21.265 12H5.901zM3.13 5a1 1 0 0 0-.998 1.063l.546 8.743 1.09-3.268A2.25 2.25 0 0 1 5.9 10h14.326l-.083-1.077A1 1 0 0 0 19.147 8H12.07a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 7.93 5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderOpenIconBold.displayName = "FolderOpenIconBold";
export { FolderOpenIconBold };
