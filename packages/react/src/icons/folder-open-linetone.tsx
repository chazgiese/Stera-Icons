import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderOpenIconLinetone = memo(
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
          d="M7.93 3a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 12.07 6h7.077a3 3 0 0 1 2.992 2.77l.166 2.153-1.995.154-.166-2.154A1 1 0 0 0 19.147 8H12.07a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 7.93 5H3.129a1 1 0 0 0-.998 1.063l.691 11.062A2 2 0 0 0 4.818 19H13v2H4.818a4 4 0 0 1-3.992-3.75L.135 6.188A3 3 0 0 1 3.129 3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.408 10.004a2.25 2.25 0 0 1 1.992 2.958l-1.767 5.303A4 4 0 0 1 17.838 21H4.775a3 3 0 0 1-2.846-3.948l1.838-5.514A2.25 2.25 0 0 1 5.9 10h15.365zM5.823 12.013a.25.25 0 0 0-.159.158l-1.838 5.513A1 1 0 0 0 4.775 19h13.063a2 2 0 0 0 1.897-1.367l1.768-5.304a.25.25 0 0 0-.176-.321L21.266 12H5.9z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderOpenIconLinetone.displayName = "FolderOpenIconLinetone";
export { FolderOpenIconLinetone };
